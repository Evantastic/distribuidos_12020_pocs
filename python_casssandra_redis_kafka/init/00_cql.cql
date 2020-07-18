/* Create a keyspace in Cassandra, which is like a database
   in MySQL or a schema in Oracle. */
CREATE KEYSPACE IF NOT EXISTS student
  WITH REPLICATION = {
     'class':'SimpleStrategy'
    ,'replication_factor': 1 }
  AND DURABLE_WRITES = true;

/* Use the keyspace or connect to the database. */
USE student;

/* Drop the member table from the student keyspace. */
DROP TABLE IF EXISTS member;

/* Create a member table in the student keyspace. */
CREATE TABLE member
( member_number       VARCHAR
, member_type         VARCHAR
, credit_card_number  VARCHAR
, credit_card_type    VARCHAR
, PRIMARY KEY ( member_number ));

/* Conditionally drop the contact table from the student keyspace. */
DROP TABLE IF EXISTS contact;

/* Create a contact table in the student keyspace. */
CREATE TABLE contact
( contact_number      VARCHAR
, contact_type        VARCHAR
, first_name          VARCHAR
, middle_name         VARCHAR
, last_name           VARCHAR
, member_number       VARCHAR
, PRIMARY KEY ( contact_number ));

/* Insert a row into the member table. */
INSERT INTO member
( member_number, member_type, credit_card_number, credit_card_type )
VALUES
('SFO-12345','GROUP','2222-4444-5555-6666','VISA');

/* Insert a row into the contact table. */
INSERT INTO contact
( contact_number, contact_type, first_name, middle_name, last_name, member_number )
VALUES
('CUS_00001','FAMILY','Barry', NULL,'Allen','SFO-12345');

/* Insert a row into the contact table. */
INSERT INTO contact
( contact_number, contact_type, first_name, middle_name, last_name, member_number )
VALUES
('CUS_00002','FAMILY','Iris', NULL,'West-Allen','SFO-12345');

/* Insert a row into the member table. */
INSERT INTO member
( member_number, member_type, credit_card_number, credit_card_type )
VALUES
('SFO-12346','GROUP','3333-8888-9999-2222','VISA');

/* Insert a row into the contact table. */
INSERT INTO contact
( contact_number, contact_type, first_name, middle_name, last_name, member_number )
VALUES
('CUS_00003','FAMILY','Caitlin','Marie','Snow','SFO-12346');