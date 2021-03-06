//! This transport uilizes the sendmail executable for each email.

use email::SendableEmail;
use std::io::prelude::*;
use std::process::{Command, Stdio};

use transport::EmailTransport;
use transport::sendmail::error::SendmailResult;

pub mod error;

/// Sends an email using the `sendmail` command
#[derive(Debug,Default)]
pub struct SendmailTransport {
    command: String,
}

impl SendmailTransport {
    /// Creates a new transport with the default `/usr/sbin/sendmail` command
    pub fn new() -> SendmailTransport {
        SendmailTransport { command: "/usr/sbin/sendmail".to_string() }
    }

    /// Creates a new transport to the given sendmail command
    pub fn new_with_command<S: Into<String>>(command: S) -> SendmailTransport {
        SendmailTransport { command: command.into() }
    }
}

impl EmailTransport<SendmailResult> for SendmailTransport {
    fn send<T: SendableEmail>(&mut self, email: T) -> SendmailResult {
        // Spawn the sendmail command
        let mut process = try!(Command::new(&self.command)
            .args(&["-i", "-f", &email.envelope().from, &email.envelope().to.join(" ")])
            .stdin(Stdio::piped())
            .stdout(Stdio::piped())
            .spawn());

        match process.stdin.as_mut().unwrap().write_all(email.message().as_bytes()) {
            Ok(_) => (),
            Err(error) => return Err(From::from(error)),
        }

        info!("Wrote message to stdin");

        if let Ok(output) = process.wait_with_output() {
            if output.status.success() {
                Ok(())
            } else {
                Err(From::from("The message could not be sent"))
            }
        } else {
            Err(From::from("The sendmail process stopped"))
        }
    }

    fn close(&mut self) {
        ()
    }
}
