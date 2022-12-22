--- Create Users for databases  ITS NOT WORKING!! NEED TO PREPARE BACKUP AND TRY WITH IT---
BEGIN;

CREATE DATABASE galery
    WITH
    OWNER = galery_admin
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


CREATE ROLE galery_admin WITH
	LOGIN
	NOSUPERUSER
	NOCREATEDB
	NOCREATEROLE
	INHERIT
	NOREPLICATION
	CONNECTION LIMIT -1
	PASSWORD 'xxx';
CREATE ROLE api WITH
	LOGIN
	NOSUPERUSER
	NOCREATEDB
	NOCREATEROLE
	INHERIT
	NOREPLICATION
	CONNECTION LIMIT -1
	PASSWORD 'xxx';

--- Create database ---
CREATE DATABASE galery
    WITH
    OWNER = galery_admin
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

GRANT CONNECT ON DATABASE galery TO api;

CREATE TABLE IF NOT EXISTS galery.public."Users"
(
    idu integer NOT NULL,
    primary_name character varying(20) NOT NULL,
    second_name character varying(20) NOT NULL,
    email character varying(65)[] NOT NULL,
    login character varying(20) NOT NULL,
    password_hash character varying(320) NOT NULL,
    role integer NOT NULL,
    tokens character varying[],
    PRIMARY KEY (idu),
    UNIQUE (idu)
);

COMMENT ON TABLE public."Users"
    IS 'Information about user';

CREATE TABLE IF NOT EXISTS public."Roles"
(
    idr integer NOT NULL,
    role_name character varying(25) NOT NULL,
    PRIMARY KEY (idr),
    UNIQUE (idr)
);

COMMENT ON TABLE public."Roles"
    IS 'Roles defined in app';

CREATE TABLE IF NOT EXISTS public."Gallery"
(
    idg integer NOT NULL,
    gallery_owner integer NOT NULL,
    PRIMARY KEY (idg),
    CONSTRAINT id UNIQUE (idg)
);

CREATE TABLE IF NOT EXISTS public."Gallery_Access"
(
    "user" integer NOT NULL,
    gallery integer NOT NULL,
    idga integer NOT NULL,
    PRIMARY KEY (idga),
    UNIQUE (idga)
);

CREATE TABLE IF NOT EXISTS public."Backup"
(
    idb integer NOT NULL,
    gallery integer NOT NULL,
    PRIMARY KEY (idb),
    UNIQUE (idb)
);

CREATE TABLE IF NOT EXISTS public."Media"
(
    idm integer NOT NULL,
    type integer NOT NULL,
    creation_date date NOT NULL,
    is_av boolean NOT NULL,
    backup_id integer NOT NULL,
    PRIMARY KEY (idm),
    UNIQUE (idm)
);

CREATE TABLE IF NOT EXISTS public."Media_Dictonary"
(
    idmd integer NOT NULL,
    name character varying(20) NOT NULL,
    size integer NOT NULL,
    PRIMARY KEY (idmd),
    UNIQUE (idmd)
);

CREATE TABLE IF NOT EXISTS public."Photo"
(
    idp integer NOT NULL,
    owner character varying(32) NOT NULL,
    name character varying(32) NOT NULL,
    size integer NOT NULL,
    resolution character varying(10) NOT NULL,
    extension character varying(5) NOT NULL,
    galleries integer[] NOT NULL,
    photo_file bytea NOT NULL,
    PRIMARY KEY (idp),
    UNIQUE (idp)
);

CREATE TABLE IF NOT EXISTS public."Tags"
(
    photo_id integer NOT NULL,
    name character varying(32) NOT NULL
);

CREATE TABLE IF NOT EXISTS public."Categories"
(
    idc integer NOT NULL,
    name character varying NOT NULL,
    parent_category integer,
    PRIMARY KEY (idc),
    UNIQUE (idc)
);

CREATE TABLE IF NOT EXISTS public."Categorized_Photos"
(
    photo integer NOT NULL,
    category integer
);

ALTER TABLE IF EXISTS public."Users"
    ADD FOREIGN KEY (role)
    REFERENCES public."Roles" (idr) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Gallery"
    ADD FOREIGN KEY (gallery_owner)
    REFERENCES public."Users" (idu) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Gallery_Access"
    ADD FOREIGN KEY ("user")
    REFERENCES public."Users" (idu) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Gallery_Access"
    ADD FOREIGN KEY (gallery)
    REFERENCES public."Gallery" (idg) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Backup"
    ADD FOREIGN KEY (gallery)
    REFERENCES public."Gallery" (idg) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Media"
    ADD FOREIGN KEY (type)
    REFERENCES public."Media_Dictonary" (idmd) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Media"
    ADD FOREIGN KEY (backup_id)
    REFERENCES public."Backup" (idb) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Tags"
    ADD FOREIGN KEY (photo_id)
    REFERENCES public."Photo" (idp) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Categories"
    ADD FOREIGN KEY (parent_category)
    REFERENCES public."Categories" (idc) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Categorized_Photos"
    ADD FOREIGN KEY (photo)
    REFERENCES public."Photo" (idp) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Categorized_Photos"
    ADD FOREIGN KEY (category)
    REFERENCES public."Categories" (idc) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;