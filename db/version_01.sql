-- This script was generated by the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public."Users"
(
    id integer NOT NULL,
    primary_name character varying(20) NOT NULL,
    second_name character varying(20) NOT NULL,
    email character varying(65)[] NOT NULL,
    login character varying(20) NOT NULL,
    password_hash character varying(320) NOT NULL,
    role integer NOT NULL,
    PRIMARY KEY (id)
);

COMMENT ON TABLE public."Users"
    IS 'Information about user';

CREATE TABLE IF NOT EXISTS public."Roles"
(
    id integer NOT NULL,
    role_name character varying(25) NOT NULL,
    PRIMARY KEY (id)
);

COMMENT ON TABLE public."Roles"
    IS 'Roles defined in app';

CREATE TABLE IF NOT EXISTS public."Gallery"
(
    id integer NOT NULL,
    gallery_owner integer NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."Gallery_Access"
(
    "user" integer NOT NULL,
    gallery integer NOT NULL
);

CREATE TABLE IF NOT EXISTS public."Backup"
(
    id integer NOT NULL,
    owner integer NOT NULL,
    photos integer[] NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."Media"
(
    id integer NOT NULL,
    type integer NOT NULL,
    creation_date date NOT NULL,
    is_lost boolean NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."Medias"
(
    id integer NOT NULL,
    name character varying(20) NOT NULL,
    size integer NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."Photo"
(
    id integer NOT NULL,
    owner character varying(32) NOT NULL,
    name character varying(32) NOT NULL,
    size integer NOT NULL,
    resolution character varying(10) NOT NULL,
    extension character varying(5) NOT NULL,
    tags character varying(15)[],
    galleries integer[] NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."Tags"
(
    id integer NOT NULL,
    name character varying(32) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."Categories"
(
    id integer NOT NULL,
    name character varying NOT NULL,
    parent_category integer,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public."Categorized_Photos"
(
    photo integer NOT NULL,
    category integer
);

ALTER TABLE IF EXISTS public."Users"
    ADD FOREIGN KEY (role)
    REFERENCES public."Roles" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Users"
    ADD FOREIGN KEY (id)
    REFERENCES public."Gallery_Access" ("user") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Gallery"
    ADD FOREIGN KEY (id)
    REFERENCES public."Gallery_Access" (gallery) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Backup"
    ADD FOREIGN KEY (owner)
    REFERENCES public."Users" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Media"
    ADD FOREIGN KEY (type)
    REFERENCES public."Medias" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Photo"
    ADD FOREIGN KEY (galleries)
    REFERENCES public."Gallery" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Photo"
    ADD FOREIGN KEY (tags)
    REFERENCES public."Tags" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Categories"
    ADD FOREIGN KEY (parent_category)
    REFERENCES public."Categories" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Categorized_Photos"
    ADD FOREIGN KEY (photo)
    REFERENCES public."Photo" (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Categorized_Photos"
    ADD FOREIGN KEY (category)
    REFERENCES public."Categories" (name) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;