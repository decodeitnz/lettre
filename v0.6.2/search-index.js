var searchIndex = {};
searchIndex["lettre"] = {"doc":"Lettre is a mailer written in Rust. It provides a simple email builder and several transports.","items":[[0,"transport","lettre","Represents an Email transport",null,null],[0,"smtp","lettre::transport","This transport sends emails using the SMTP protocol",null,null],[3,"SmtpTransportBuilder","lettre::transport::smtp","Contains client configuration",null,null],[3,"SmtpTransport","","Structure that implements the high level SMTP client",null,null],[4,"SecurityLevel","","TLS security level",null,null],[13,"EncryptedWrapper","","Use a TLS wrapped connection",0,null],[13,"AlwaysEncrypt","","Only send an email on encrypted connection (with STARTTLS)",0,null],[13,"Opportunistic","","Use TLS when available (with STARTTLS)",0,null],[13,"NeverEncrypt","","Never use TLS",0,null],[0,"extension","","ESMTP features",null,null],[3,"ServerInfo","lettre::transport::smtp::extension","Contains information about an SMTP server",null,null],[12,"name","","Server name",1,null],[12,"features","","ESMTP features supported by the server",1,null],[4,"Extension","","Supported ESMTP keywords",null,null],[13,"EightBitMime","","8BITMIME keyword",2,null],[13,"SmtpUtfEight","","SMTPUTF8 keyword",2,null],[13,"StartTls","","STARTTLS keyword",2,null],[13,"Authentication","","AUTH mechanism",2,null],[11,"eq","","",2,null],[11,"ne","","",2,null],[11,"hash","","",2,null],[11,"clone","","",2,null],[11,"fmt","","",2,null],[11,"fmt","","",2,null],[11,"clone","","",1,null],[11,"fmt","","",1,null],[11,"eq","","",1,null],[11,"ne","","",1,null],[11,"fmt","","",1,null],[11,"from_response","","Parses a response to create a `ServerInfo`",1,{"inputs":[{"name":"response"}],"output":{"name":"result"}}],[11,"supports_feature","","Checks if the server supports an ESMTP feature",1,null],[11,"supports_auth_mechanism","","Checks if the server supports an ESMTP feature",1,null],[0,"authentication","lettre::transport::smtp","Provides authentication mechanisms",null,null],[4,"Mechanism","lettre::transport::smtp::authentication","Represents authentication mechanisms",null,null],[13,"Plain","","PLAIN authentication mechanism\nRFC 4616: https://tools.ietf.org/html/rfc4616",3,null],[13,"CramMd5","","CRAM-MD5 authentication mechanism\nRFC 2195: https://tools.ietf.org/html/rfc2195",3,null],[11,"eq","","",3,null],[11,"clone","","",3,null],[11,"hash","","",3,null],[11,"fmt","","",3,null],[11,"fmt","","",3,null],[11,"supports_initial_response","","Does the mechanism supports initial response",3,null],[11,"response","","Returns the string to send to the server, using the provided username, password and\nchallenge in some cases",3,null],[0,"response","lettre::transport::smtp","SMTP response, containing a mandatory return code and an optional text\nmessage",null,null],[3,"Code","lettre::transport::smtp::response","Represents a 3 digit SMTP response code",null,null],[3,"ResponseParser","","Parses an SMTP response",null,null],[3,"Response","","Contains an SMTP reply, with separated code and message",null,null],[4,"Severity","","First digit indicates severity",null,null],[13,"PositiveCompletion","","2yx",4,null],[13,"PositiveIntermediate","","3yz",4,null],[13,"TransientNegativeCompletion","","4yz",4,null],[13,"PermanentNegativeCompletion","","5yz",4,null],[4,"Category","","Second digit",null,null],[13,"Syntax","","x0z",5,null],[13,"Information","","x1z",5,null],[13,"Connections","","x2z",5,null],[13,"Unspecified3","","x3z",5,null],[13,"Unspecified4","","x4z",5,null],[13,"MailSystem","","x5z",5,null],[11,"eq","","",4,null],[11,"clone","","",4,null],[11,"fmt","","",4,null],[11,"from_str","","",4,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",4,null],[11,"eq","","",5,null],[11,"clone","","",5,null],[11,"fmt","","",5,null],[11,"from_str","","",5,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",5,null],[11,"eq","","",6,null],[11,"ne","","",6,null],[11,"clone","","",6,null],[11,"fmt","","",6,null],[11,"from_str","","",6,{"inputs":[{"name":"str"}],"output":{"name":"result"}}],[11,"new","","Creates a new `Code` structure",6,{"inputs":[{"name":"severity"},{"name":"category"},{"name":"u8"}],"output":{"name":"code"}}],[11,"code","","Returns the reply code",6,null],[11,"eq","","",7,null],[11,"ne","","",7,null],[11,"clone","","",7,null],[11,"fmt","","",7,null],[11,"default","","",7,{"inputs":[],"output":{"name":"responseparser"}}],[11,"read_line","","Parses a line and return a `bool` indicating if there are more lines to come",7,null],[11,"response","","Builds a response from a `ResponseParser`",7,null],[11,"eq","","",8,null],[11,"ne","","",8,null],[11,"clone","","",8,null],[11,"fmt","","",8,null],[11,"new","","Creates a new `Response`",8,{"inputs":[{"name":"code"},{"name":"vec"}],"output":{"name":"response"}}],[11,"is_positive","","Tells if the response is positive",8,null],[11,"message","","Returns the message",8,null],[11,"severity","","Returns the severity (i.e. 1st digit)",8,null],[11,"category","","Returns the category (i.e. 2nd digit)",8,null],[11,"detail","","Returns the detail (i.e. 3rd digit)",8,null],[11,"has_code","","Tests code equality",8,null],[11,"first_word","","Returns only the first word of the message if possible",8,null],[0,"client","lettre::transport::smtp","SMTP client",null,null],[3,"Client","lettre::transport::smtp::client","Structure that implements the SMTP client",null,null],[0,"net","","A trait to represent a stream",null,null],[4,"NetworkStream","lettre::transport::smtp::client::net","Represents the different types of underlying network streams",null,null],[13,"Plain","","Plain TCP",9,null],[13,"Ssl","","SSL over TCP",9,null],[8,"Connector","","A trait for the concept of opening a stream",null,null],[10,"connect","","Opens a connection to the given IP socket",10,{"inputs":[{"name":"socketaddr"},{"name":"option"}],"output":{"name":"result"}}],[10,"upgrade_tls","","Upgrades to TLS connection",10,null],[10,"is_encrypted","","Is the NetworkStream encrypted",10,null],[11,"connect","","",9,{"inputs":[{"name":"socketaddr"},{"name":"option"}],"output":{"name":"result"}}],[11,"upgrade_tls","","",9,null],[11,"is_encrypted","","",9,null],[11,"fmt","","",9,null],[11,"read","","",9,null],[11,"write","","",9,null],[11,"flush","","",9,null],[11,"fmt","lettre::transport::smtp::client","",11,null],[11,"new","","Creates a new SMTP client",11,{"inputs":[],"output":{"name":"client"}}],[11,"close","","Closes the SMTP transaction if possible",11,null],[11,"set_stream","","Sets the underlying stream",11,null],[11,"upgrade_tls_stream","","Upgrades the underlying connection to SSL/TLS",11,null],[11,"is_encrypted","","Tells if the underlying stream is currently encrypted",11,null],[11,"connect","","Connects to the configured server",11,null],[11,"is_connected","","Checks if the server is connected using the NOOP SMTP command",11,null],[11,"command","","Sends an SMTP command",11,null],[11,"ehlo","","Sends a EHLO command",11,null],[11,"mail","","Sends a MAIL command",11,null],[11,"rcpt","","Sends a RCPT command",11,null],[11,"data","","Sends a DATA command",11,null],[11,"quit","","Sends a QUIT command",11,null],[11,"noop","","Sends a NOOP command",11,null],[11,"help","","Sends a HELP command",11,null],[11,"vrfy","","Sends a VRFY command",11,null],[11,"expn","","Sends a EXPN command",11,null],[11,"rset","","Sends a RSET command",11,null],[11,"auth","","Sends an AUTH command with the given mechanism",11,null],[11,"starttls","","Sends a STARTTLS command",11,null],[11,"message","","Sends the message content",11,null],[0,"error","lettre::transport::smtp","Error and result type for SMTP clients",null,null],[4,"Error","lettre::transport::smtp::error","An enum of all error kinds.",null,null],[13,"Transient","","Transient SMTP error, 4xx reply code",12,null],[13,"Permanent","","Permanent SMTP error, 5xx reply code",12,null],[13,"ResponseParsing","","Error parsing a response",12,null],[13,"ChallengeParsing","","Error parsing a base64 string in response",12,null],[13,"Client","","Internal client error",12,null],[13,"Resolution","","DNS resolution error",12,null],[13,"Io","","IO error",12,null],[6,"SmtpResult","","SMTP result type",null,null],[11,"fmt","","",12,null],[11,"fmt","","",12,null],[11,"description","","",12,null],[11,"cause","","",12,null],[11,"from","","",12,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"from","","",12,{"inputs":[{"name":"response"}],"output":{"name":"error"}}],[11,"from","","",12,{"inputs":[{"name":"str"}],"output":{"name":"error"}}],[17,"SMTP_PORT","lettre::transport::smtp","Default smtp port",null,null],[17,"SUBMISSION_PORT","","Default submission port",null,null],[17,"SP","","The word separator for SMTP transactions",null,null],[17,"CRLF","","The line ending for SMTP transactions (carriage return + line feed)",null,null],[17,"COLON","","Colon",null,null],[17,"MESSAGE_ENDING","","The ending of message content",null,null],[17,"NUL","","NUL unicode character",null,null],[11,"fmt","","",0,null],[11,"new","","Creates a new local SMTP client",13,{"inputs":[{"name":"a"}],"output":{"name":"result"}}],[11,"localhost","","Creates a new local SMTP client to port 25",13,{"inputs":[],"output":{"name":"result"}}],[11,"ssl_context","","Use STARTTLS with a specific context",13,null],[11,"security_level","","Set the security level for SSL/TLS",13,null],[11,"encrypt","","Require SSL/TLS using STARTTLS",13,null],[11,"ssl_wrapper","","Require SSL/TLS using SMTPS",13,null],[11,"smtp_utf8","","Enable SMTPUTF8 if the server supports it",13,null],[11,"hello_name","","Set the name used during HELO or EHLO",13,null],[11,"connection_reuse","","Enable connection reuse",13,null],[11,"connection_reuse_count_limit","","Set the maximum number of emails sent using one connection",13,null],[11,"credentials","","Set the client credentials",13,null],[11,"authentication_mechanism","","Set the authentication mechanisms",13,null],[11,"build","","Build the SMTP client",13,null],[11,"new","","Creates a new SMTP client",14,{"inputs":[{"name":"smtptransportbuilder"}],"output":{"name":"smtptransport"}}],[11,"get_ehlo","","Gets the EHLO response and updates server information",14,null],[11,"send","","Sends an email",14,null],[11,"close","","Closes the inner connection",14,null],[0,"stub","lettre::transport","This transport is a stub that only logs the message, and always returns\nsuccess",null,null],[3,"StubEmailTransport","lettre::transport::stub","This transport does nothing except logging the message envelope",null,null],[0,"error","","Error and result type for file transport",null,null],[4,"Error","lettre::transport::stub::error","An enum of all error kinds.",null,null],[13,"Client","","Internal client error",15,null],[11,"fmt","","",15,null],[11,"fmt","","",15,null],[11,"description","","",15,null],[11,"cause","","",15,null],[11,"from","","",15,{"inputs":[{"name":"str"}],"output":{"name":"error"}}],[6,"StubResult","lettre::transport::stub","SMTP result type",null,null],[11,"send","","",16,null],[11,"close","","",16,null],[0,"file","lettre::transport","This transport creates a file for each email, containing the envelope information and the email\nitself.",null,null],[3,"FileEmailTransport","lettre::transport::file","Writes the content and the envelope information to a file",null,null],[0,"error","","Error and result type for file transport",null,null],[4,"Error","lettre::transport::file::error","An enum of all error kinds.",null,null],[13,"Client","","Internal client error",17,null],[13,"Io","","IO error",17,null],[6,"FileResult","","SMTP result type",null,null],[11,"fmt","","",17,null],[11,"fmt","","",17,null],[11,"description","","",17,null],[11,"cause","","",17,null],[11,"from","","",17,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"from","","",17,{"inputs":[{"name":"str"}],"output":{"name":"error"}}],[11,"new","lettre::transport::file","Creates a new transport to the given directory",18,{"inputs":[{"name":"p"}],"output":{"name":"fileemailtransport"}}],[11,"send","","",18,null],[11,"close","","",18,null],[8,"EmailTransport","lettre::transport","Transport method for emails",null,null],[10,"send","","Sends the email",19,null],[10,"close","","Close the transport explicitly",19,null],[0,"email","lettre","Simple email representation",null,null],[3,"SimpleEmail","lettre::email","Simple representation of an email, useful for some transports",null,null],[3,"PartBuilder","","Builds a `MimeMessage` structure",null,null],[3,"EmailBuilder","","Builds an `Email` structure",null,null],[3,"Envelope","","Simple email enveloppe representation",null,null],[3,"Email","","Simple email representation",null,null],[3,"SimpleSendableEmail","","Minimal email structure",null,null],[0,"error","","Error and result type for emails",null,null],[4,"Error","lettre::email::error","An enum of all error kinds.",null,null],[13,"MissingFrom","","Missinf sender",20,null],[13,"MissingTo","","Missing recipient",20,null],[11,"fmt","","",20,null],[11,"fmt","","",20,null],[11,"description","","",20,null],[8,"ToHeader","lettre::email","Converts an address or an address with an alias to a `Header`",null,null],[10,"to_header","","Converts to a `Header` struct",21,null],[8,"ToMailbox","","Converts an adress or an address with an alias to a `Mailbox`",null,null],[10,"to_mailbox","","Converts to a `Mailbox` struct",22,null],[8,"IntoEmail","","Can be transformed to a sendable email",null,null],[10,"into_email","","Builds an email",23,null],[8,"SendableEmail","","Email sendable by an SMTP client",null,null],[10,"from_address","","From address",24,null],[10,"to_addresses","","To addresses",24,null],[10,"message","","Message content",24,null],[10,"message_id","","Message ID",24,null],[11,"into_email","","",25,null],[11,"eq","","",25,null],[11,"ne","","",25,null],[11,"clone","","",25,null],[11,"fmt","","",25,null],[11,"default","","",25,{"inputs":[],"output":{"name":"simpleemail"}}],[11,"header","","Adds a generic header",25,null],[11,"add_header","","Adds a generic header",25,null],[11,"from","","Adds a `From` header and stores the sender address",25,null],[11,"add_from","","Adds a `From` header and stores the sender address",25,null],[11,"to","","Adds a `To` header and stores the recipient address",25,null],[11,"add_to","","Adds a `To` header and stores the recipient address",25,null],[11,"cc","","Adds a `Cc` header and stores the recipient address",25,null],[11,"add_cc","","Adds a `Cc` header and stores the recipient address",25,null],[11,"reply_to","","Adds a `Reply-To` header",25,null],[11,"add_reply_to","","Adds a `Reply-To` header",25,null],[11,"subject","","Adds a `Subject` header",25,null],[11,"set_subject","","Adds a `Subject` header",25,null],[11,"date","","Adds a `Date` header with the given date",25,null],[11,"set_date","","Adds a `Date` header with the given date",25,null],[11,"text","","Sets the email body to plain text content",25,null],[11,"set_text","","Sets the email body to plain text content",25,null],[11,"html","","Sets the email body to HTML content",25,null],[11,"set_html","","Sets the email body to HTML content",25,null],[11,"eq","","",26,null],[11,"ne","","",26,null],[11,"clone","","",26,null],[11,"fmt","","",26,null],[11,"eq","","",27,null],[11,"ne","","",27,null],[11,"clone","","",27,null],[11,"fmt","","",27,null],[11,"eq","","",28,null],[11,"ne","","",28,null],[11,"clone","","",28,null],[11,"fmt","","",28,null],[11,"eq","","",29,null],[11,"ne","","",29,null],[11,"clone","","",29,null],[11,"fmt","","",29,null],[11,"fmt","","",29,null],[11,"new","","Creates a new empty part",26,{"inputs":[],"output":{"name":"partbuilder"}}],[11,"header","","Adds a generic header",26,null],[11,"add_header","","Adds a generic header",26,null],[11,"body","","Sets the body",26,null],[11,"set_body","","Sets the body",26,null],[11,"message_type","","Defines a `MimeMultipartType` value",26,null],[11,"set_message_type","","Defines a `MimeMultipartType` value",26,null],[11,"content_type","","Adds a `ContentType` header with the given MIME type",26,null],[11,"set_content_type","","Adds a `ContentType` header with the given MIME type",26,null],[11,"child","","Adds a child part",26,null],[11,"add_child","","Adds a child part",26,null],[11,"build","","Gets builded `MimeMessage`",26,null],[11,"new","","Creates a new empty email",27,{"inputs":[],"output":{"name":"emailbuilder"}}],[11,"body","","Sets the email body",27,null],[11,"set_body","","Sets the email body",27,null],[11,"header","","Add a generic header",27,null],[11,"add_header","","Add a generic header",27,null],[11,"from","","Adds a `From` header and stores the sender address",27,null],[11,"add_from","","Adds a `From` header and stores the sender address",27,null],[11,"to","","Adds a `To` header and stores the recipient address",27,null],[11,"add_to","","Adds a `To` header and stores the recipient address",27,null],[11,"cc","","Adds a `Cc` header and stores the recipient address",27,null],[11,"add_cc","","Adds a `Cc` header and stores the recipient address",27,null],[11,"reply_to","","Adds a `Reply-To` header",27,null],[11,"add_reply_to","","Adds a `Reply-To` header",27,null],[11,"sender","","Adds a `Sender` header",27,null],[11,"set_sender","","Adds a `Sender` header",27,null],[11,"subject","","Adds a `Subject` header",27,null],[11,"set_subject","","Adds a `Subject` header",27,null],[11,"date","","Adds a `Date` header with the given date",27,null],[11,"set_date","","Adds a `Date` header with the given date",27,null],[11,"message_type","","Set the message type",27,null],[11,"set_message_type","","Set the message type",27,null],[11,"child","","Adds a child",27,null],[11,"add_child","","Adds a child",27,null],[11,"text","","Sets the email body to plain text content",27,null],[11,"set_text","","Sets the email body to plain text content",27,null],[11,"html","","Sets the email body to HTML content",27,null],[11,"set_html","","Sets the email body to HTML content",27,null],[11,"alternative","","Sets the email content",27,null],[11,"set_alternative","","Sets the email content",27,null],[11,"build","","Builds the Email",27,null],[11,"new","","Returns a new email",30,{"inputs":[{"name":"str"},{"name":"vec"},{"name":"str"}],"output":{"name":"simplesendableemail"}}],[11,"from_address","","",30,null],[11,"to_addresses","","",30,null],[11,"message","","",30,null],[11,"message_id","","",30,null],[11,"to_addresses","","",29,null],[11,"from_address","","",29,null],[11,"message","","",29,null],[11,"message_id","","",29,null]],"paths":[[4,"SecurityLevel"],[3,"ServerInfo"],[4,"Extension"],[4,"Mechanism"],[4,"Severity"],[4,"Category"],[3,"Code"],[3,"ResponseParser"],[3,"Response"],[4,"NetworkStream"],[8,"Connector"],[3,"Client"],[4,"Error"],[3,"SmtpTransportBuilder"],[3,"SmtpTransport"],[4,"Error"],[3,"StubEmailTransport"],[4,"Error"],[3,"FileEmailTransport"],[8,"EmailTransport"],[4,"Error"],[8,"ToHeader"],[8,"ToMailbox"],[8,"IntoEmail"],[8,"SendableEmail"],[3,"SimpleEmail"],[3,"PartBuilder"],[3,"EmailBuilder"],[3,"Envelope"],[3,"Email"],[3,"SimpleSendableEmail"]]};
initSearch(searchIndex);
