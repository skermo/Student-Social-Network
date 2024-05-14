data--
-- PostgreSQL database dump
--

-- Dumped from database version 16.0 (Debian 16.0-1.pgdg120+1)
-- Dumped by pg_dump version 16.0 (Debian 16.0-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name) FROM stdin;
0ee09fd1-b072-48b1-ad42-aa309e6f1818	Obavještenje
58db39e1-caa6-4d41-aff2-20eea3a43ab6	Random
612f2438-741f-48d0-9395-0ebe3f197347	Pomoć potrebna
909d0477-d2bf-49d3-a38d-5b20eb299efb	Postignuće
9be38b4b-4cbb-4ec6-b343-d540bb11e10b	Generalna diskusija
2432e2d0-6b31-4b75-b2d9-43a829f6af51	Stanovanje i smještaj
1422f843-3543-4acd-b6a7-fc78a9468275	Praksa i posao
a7d0b486-6ff2-4cca-aaf8-4577ba939051	Klubovi i organizacije
4f984372-0f23-4cf9-aa70-b554a6c0fe2e	Razmjena studenata
66e16d87-70c5-4209-a457-b786560cb98d	Studentski život
9a464964-a269-4e7f-90db-c784ea8f2fb0	Sport i fitness
d2464068-5852-49db-b98b-f523e70d26e9	Društvene i kulturne aktivnosti
fc429783-a2d1-454f-bb92-7c28ba781a00	Volontiranje
\.


--
-- Data for Name: universities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.universities (id, abbreviation, city, country, full_name, image_url) FROM stdin;
3d33be27-0d38-4082-90ea-277f706f9d73	UNZE	Zenica	Bosna i Hercegovina	Univerzitet u Zenici	https://drive.google.com/file/d/1yq1BTW6CnWu4XSkWNe1AASl9hR42Luv9/view?usp=drive_link
e1d61d26-66ae-4434-9231-3e7fccb4b484	UNSA	Sarajevo	Bosna i Hercegovina	Univerzitet u Sarajevu	https://drive.google.com/file/d/1pdnbaDXkq6DsMCcR-kWkfW100-zQGG2j/view?usp=drive_link
80fd6952-af0f-4245-ad00-8cb187e4be52	UNTZ	Tuzla	Bosna i Hercegovina	Univerzitet u Tuzli	https://drive.google.com/file/d/1c09WH8BlpeHrMZ7wCws7D5OksSRt7VN0/view?usp=drive_link
a2d00f82-4c63-445f-a798-75de48230ed5	UNMO	Mostar	Bosna i Hercegovina	Univerzitet 'Džemal Bijedić' u Mostaru	https://drive.google.com/file/d/13s1T76Uv3pqcBTD9AA275y8tA2Jf0ilw/view?usp=drive_link
ffd95dc7-de79-4a4c-a646-7e7bca1bd66a	UNIBL	Banja Luka	Bosna i Hercegovina	Univerzitet u Banjoj Luci	https://drive.google.com/file/d/1JisX7I9IFnss2nI2_vl6pqBb7KQDm1C2/view?usp=drive_link
\.


--
-- Data for Name: colleges; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.colleges (id, abbreviation, city, full_name, image_url, country, university_id) FROM stdin;
02b0f055-73cc-41ca-a856-2fa929d3a5be	EF	Sarajevo	Ekonomski fakultet	https://drive.google.com/file/d/1Tbnp9n0fHAvqAv1AUTt8R_ccYEqUUMX6/view?usp=drive_link	Bosna i Hercegovina	e1d61d26-66ae-4434-9231-3e7fccb4b484
1126d7b9-13de-4367-91d2-ee1ffbd35091	EF	Sarajevo	Arhitektonski fakultet	https://drive.google.com/file/d/11f3eqmb1ldHb3mAOM2HnN_FdfPAX-7Nt/view?usp=drive_link	Bosna i Hercegovina	e1d61d26-66ae-4434-9231-3e7fccb4b484
140c65b3-d227-457c-851c-ffdfc46d3672	ŠF	Banja Luka	Šumarski fakultet	https://drive.google.com/file/d/1kxI5VmE5ieskPS_Z7C8hVVrFfjd7uehq/view?usp=drive_link	Bosna i Hercegovina	ffd95dc7-de79-4a4c-a646-7e7bca1bd66a
27025428-23bc-40bb-969e-b4bc09b6d151	AF	Mostar	Agromediteranski fakultet	https://drive.google.com/file/d/1VUo9q8CyO81eKKK2FZgDB37-GtgDbr8z/view?usp=drive_link	Bosna i Hercegovina	a2d00f82-4c63-445f-a798-75de48230ed5
557fc87e-c2da-48e7-b247-1458de74fb38	PMF	Tuzla	Prirodno-matematički fakultet	https://drive.google.com/file/d/1hgHLKWuA_MsyAmX_qgQPD0bqVlMrJdHS/view?usp=drive_link	Bosna i Hercegovina	80fd6952-af0f-4245-ad00-8cb187e4be52
5c892dd8-8852-44b9-82f3-c4edafde49ad	PF	Sarajevo	Pedagoški fakultet	https://drive.google.com/file/d/1LWGMWd-rKeof57PKIhN8TWE13iare4mG/view?usp=drive_link	Bosna i Hercegovina	e1d61d26-66ae-4434-9231-3e7fccb4b484
6aaff89e-3863-4284-ab9a-f4caf46061c7	GF	Mostar	Građevinski fakultet	https://drive.google.com/file/d/1wIDcBZwGqQM2abwvCkPoXo5N8aW0TjQ5/view?usp=drive_link	Bosna i Hercegovina	a2d00f82-4c63-445f-a798-75de48230ed5
70c6b0ec-6f91-4c55-ad57-5e7b4eb2efee	PRF	Zenica	Pravni fakultet	https://drive.google.com/file/d/1Vzlquk8rh4NM50T9y-LfnLSvXvPPdy_u/view?usp=drive_link	Bosna i Hercegovina	3d33be27-0d38-4082-90ea-277f706f9d73
80eede95-71c6-488c-84d0-fc18949706f3	FF	Tuzla	Filozofski fakultet	https://drive.google.com/file/d/16xlYXrGdAOzr7jGVNYATfBPzGGnP1Xsd/view?usp=drive_link	Bosna i Hercegovina	80fd6952-af0f-4245-ad00-8cb187e4be52
899f1707-e304-479b-aa8b-a351f8a2a46f	PTF	Zenica	Politehnički fakultet	https://drive.google.com/file/d/1rJyVqijYiwbVosF4vuPHPxqyxoQWcpTm/view?usp=drive_link	Bosna i Hercegovina	3d33be27-0d38-4082-90ea-277f706f9d73
cc6a5247-fc65-4783-aae7-7f1240babd48	MF	Zenica	Mašinski fakultet	https://drive.google.com/file/d/1xii75-doTKN0WMGSE99p3cNjqoCjMT6O/view?usp=drive_link	Bosna i Hercegovina	3d33be27-0d38-4082-90ea-277f706f9d73
cd9722d7-bc5c-47cf-9a1e-0fdf8db80724	MEDF	Zenica	Medicinski fakultet	https://drive.google.com/file/d/1plbieMxr0wSr_W3h840xjtKHg4dWw0yj/view?usp=drive_link	Bosna i Hercegovina	3d33be27-0d38-4082-90ea-277f706f9d73
ec46bb90-591a-4aff-a627-c34236a929c7	ETF	Sarajevo	Elektrotehnički fakultet	https://drive.google.com/file/d/1B27akhjMsvxgY-xhprJjMX5E-tNsBZsl/view?usp=drive_link	Bosna i Hercegovina	e1d61d26-66ae-4434-9231-3e7fccb4b484
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, first_name, last_name, password, college_id, university_id, image_url) FROM stdin;
c644998b-87c0-4c07-a395-2cb41afc3ff3	semra@mail.com	Semra	Kermo	$2a$10$YcbD4HHwI32QiQz.7jHPN.iXaWJvQhdTGBTPXlgxNMRdMSYHK8xue	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	https://drive.google.com/file/d/1PQ6ANa8IVqez137pN5lu6TsZdQxsu3c1/view?usp=sharing
2b458b47-2a2c-42d7-a4a7-d79320e9db20	azra@mail.com	Azra	Kermo	$2a$10$5EsSDviDLMHqFDeSLLggSeKOGfm244w5Ggox.KbdvhO.TV3rrVaqu	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	https://drive.google.com/file/d/125_NruJqgEm64IWypLkXkL84OfxM7qMF/view?usp=sharing
a14b8467-c05e-4ae3-96c9-83bd5c690392	mateo@mail.com	Mateo	Gljiva	$2a$10$727LzXcu5BfBA0CkswCKkuXddMGM4kKjXpDpp87JqWbJuKpGFJdHG	cd9722d7-bc5c-47cf-9a1e-0fdf8db80724	3d33be27-0d38-4082-90ea-277f706f9d73	https://drive.google.com/file/d/1poOrhfVZv7WNosKW28WZIRSdGQq-i0XU/view?usp=sharing
5da402f0-6df2-4d8d-8068-b3ef4db60982	armin@mail.com	Armin	Doglod	$2a$10$qTdIDOiABZalCH64HcXnD.7kFrGNRdy.fnatVXGh4XVf8ZyCT08Ni	1126d7b9-13de-4367-91d2-ee1ffbd35091	e1d61d26-66ae-4434-9231-3e7fccb4b484	https://drive.google.com/file/d/1EFr0JwZF2cXd9rAtXynYkIDeIzFULLCL/view?usp=sharing
8e1ea8f2-bb18-4966-861b-837eb5d90b5a	marija@mail.com	Marija	Huto	$2a$10$Ld3ae9MJiKD9X7Icr38tl.76LfsRKbDRxtuJFROyXsvMj4CMJy7BS	80eede95-71c6-488c-84d0-fc18949706f3	80fd6952-af0f-4245-ad00-8cb187e4be52	https://drive.google.com/file/d/1R0FRSaJZ5lL4bSRnoOPJ7p79pDdmv0ax/view?usp=sharing
0f6536a4-9235-46b1-8eed-c5a28501509d	haris@mail.com	Haris	Hajdar	$2a$10$6vE1muszCRmym8fDKoedFeWHVZgS7aLrkIy61oUOdmmSy8ErzFA7O	6aaff89e-3863-4284-ab9a-f4caf46061c7	a2d00f82-4c63-445f-a798-75de48230ed5	https://drive.google.com/file/d/1Q2oFPpEFWusBZ0Yosqw6bUvT0RJx1Fk6/view?usp=sharing
bc5496e7-82c7-47a0-83f6-bb09e9e28120	elma@mail.com	Elma	Durak	$2a$10$VwrIrIyWljoFltsYSMrJZum.r3EVWZZiryg3YxieCqNbpQPahWjRC	140c65b3-d227-457c-851c-ffdfc46d3672	ffd95dc7-de79-4a4c-a646-7e7bca1bd66a	https://drive.google.com/file/d/1OCXXXWPQco9uEKq6giN2R0xDAbzVD2Lu/view?usp=sharing
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.posts (id, created_on, description, title, updated_on, category_id, user_id, is_private, college_id, university_id, number_of_comments, number_of_likes) FROM stdin;
c20e1f9b-c126-494d-8b1b-7b779b2fe484	2024-01-14 21:29:47.264788+00	Vase misljenje, fitpass - isplati li se placati?	Fitpass	2024-05-14 16:41:03.106911+00	9a464964-a269-4e7f-90db-c784ea8f2fb0	0f6536a4-9235-46b1-8eed-c5a28501509d	f	6aaff89e-3863-4284-ab9a-f4caf46061c7	a2d00f82-4c63-445f-a798-75de48230ed5	4	4
b92c6479-00cd-469a-ac2d-3882775ce4e5	2024-01-13 22:00:54.327347+00	Ima li iko broj od studentske sluzbe?	Studentska sluzba	2024-01-14 18:41:22.199341+00	58db39e1-caa6-4d41-aff2-20eea3a43ab6	c644998b-87c0-4c07-a395-2cb41afc3ff3	f	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	7	1
00bab96b-c22c-45d9-b00a-693855a5d174	2024-01-14 18:57:12.809509+00	Koja je najjeftinija teretana u blizini univerziteta?	Teretana	2024-01-14 18:57:12.809527+00	9a464964-a269-4e7f-90db-c784ea8f2fb0	c644998b-87c0-4c07-a395-2cb41afc3ff3	f	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	0	0
0377a9c6-2d14-405c-9771-2d6b562e5699	2024-01-14 18:58:06.778874+00	Kandidatura za predstavnika godine traje do sutra.	Predstavnik godine.	2024-01-14 19:10:43.899682+00	0ee09fd1-b072-48b1-ad42-aa309e6f1818	c644998b-87c0-4c07-a395-2cb41afc3ff3	f	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	1	0
e3ed1c9b-5dec-46e2-a3dc-1bc4ce6ccd8c	2024-01-14 21:22:49.141473+00	Pozdrav raja. Potreban mi je cimer za naredni semestar. Zivim na Malti.	Potreban cimer	2024-04-28 17:26:38.330064+00	2432e2d0-6b31-4b75-b2d9-43a829f6af51	5da402f0-6df2-4d8d-8068-b3ef4db60982	f	1126d7b9-13de-4367-91d2-ee1ffbd35091	e1d61d26-66ae-4434-9231-3e7fccb4b484	0	3
b76a1c90-e68a-4b47-91f3-df904f337f9b	2024-01-14 21:37:43.90998+00	Hej, ima li iko nekih materijala za OOP? 	OOP	2024-01-14 21:38:07.261419+00	9be38b4b-4cbb-4ec6-b343-d540bb11e10b	c644998b-87c0-4c07-a395-2cb41afc3ff3	t	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	0	1
4c757360-d78b-44da-821c-9ec7b1be62b6	2024-01-14 18:59:26.507754+00	Pao mi je sistem na racunaru :( Moze li iko da mi pomogne?	Pao sistem na racunaru	2024-01-14 21:38:28.200594+00	612f2438-741f-48d0-9395-0ebe3f197347	c644998b-87c0-4c07-a395-2cb41afc3ff3	f	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	1	1
34814d00-3f63-4e27-806f-88be6f204c7a	2024-01-14 21:48:47.756992+00	Zelim samo pohvaliti svoje kolege koje su prosle sedmice osvojile drugo mjesto na takmicenju iz prve pomoci!! Bravo Aida, Marko, Lejla i Ajla!!	Takmicenje	2024-01-14 21:48:47.757071+00	909d0477-d2bf-49d3-a38d-5b20eb299efb	a14b8467-c05e-4ae3-96c9-83bd5c690392	f	cd9722d7-bc5c-47cf-9a1e-0fdf8db80724	3d33be27-0d38-4082-90ea-277f706f9d73	0	0
ea045388-4185-4b85-87bc-ba40bd5142d5	2024-01-14 21:54:25.536461+00	Hej, ima li iko da ide za Ze iz visokog u ponedjeljak?	Visoko	2024-01-14 21:54:25.536514+00	9be38b4b-4cbb-4ec6-b343-d540bb11e10b	a14b8467-c05e-4ae3-96c9-83bd5c690392	f	cd9722d7-bc5c-47cf-9a1e-0fdf8db80724	3d33be27-0d38-4082-90ea-277f706f9d73	0	0
4cd8237c-8501-47c5-a3cb-1b7e48df7d17	2024-01-14 21:13:52.163567+00	Pozdrav, radi li iko instrukcije iz diskretne matematike? :)	Instrukcije	2024-01-14 21:31:21.937481+00	612f2438-741f-48d0-9395-0ebe3f197347	2b458b47-2a2c-42d7-a4a7-d79320e9db20	f	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	3	4
9850fbb8-609a-4495-8f54-9beba581133e	2023-10-28 21:44:00.907586+00	Dobio sam priliku za stažiranje u kompaniji koju sam oduvek divio. Ovo je za mene veliko postignuće i korak ka ostvarenju karijernih ciljeva. Radujem se što ću moći da primenim svoje znanje u stvarnom poslovnom okruženju i naučim nove veštine. Zahvalan sam svima koji su verovali u mene i pružili podršku. Ovo je početak nečeg velikog!	Staziranje	2023-10-28 21:44:00.907624+00	909d0477-d2bf-49d3-a38d-5b20eb299efb	c644998b-87c0-4c07-a395-2cb41afc3ff3	t	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	5	5
74e3dcb8-8266-4583-b292-494c18592c94	2024-01-14 21:25:54.044432+00	Hejj ljudi :) Idem naredni semestar na razmjenu studenata u Francusku. Ima li neko od vas da je vec bio? Kakva su vasa iskustva? Imate li nekih preporuka i mozete li mi reci koliko je neophodno poznavati jezik? Hvala puno!!	Erasmus - iskustva	2024-04-28 17:26:45.132751+00	4f984372-0f23-4cf9-aa70-b554a6c0fe2e	8e1ea8f2-bb18-4966-861b-837eb5d90b5a	f	80eede95-71c6-488c-84d0-fc18949706f3	80fd6952-af0f-4245-ad00-8cb187e4be52	2	4
3ce899b8-cc6c-4260-9834-573d5fc6848c	2023-10-28 21:42:16.016678+00	Dobio sam priliku da predstavim svoj rad na konferenciji održanoj prošle nedelje. Bio je to neverovatan osećaj videti svoje napore i istraživanje priznate na tako visokom nivou. Hvala svima koji su me podržavali tokom ovog procesa.	Zahvale	2023-10-28 21:42:16.016704+00	909d0477-d2bf-49d3-a38d-5b20eb299efb	c644998b-87c0-4c07-a395-2cb41afc3ff3	t	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	5	5
7d89e286-25b4-43e5-b2e4-7181489bc867	2023-10-28 21:31:49.853741+00	Moze li neko ponijeti sutra moj indeks na potpis kod profesora matematike?	Indeks	2023-10-28 21:31:49.85383+00	612f2438-741f-48d0-9395-0ebe3f197347	c644998b-87c0-4c07-a395-2cb41afc3ff3	f	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	5	5
834d9f46-f3cf-4d1e-8e08-d2bb2b512592	2024-01-14 18:45:06.517982+00	Cestitke svima koji su ucestvovali u sahovskom takmicenju za vikend!!	Turnir saha	2024-01-14 18:45:06.518+00	909d0477-d2bf-49d3-a38d-5b20eb299efb	c644998b-87c0-4c07-a395-2cb41afc3ff3	f	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	0	0
e4191b2c-165d-4d72-a652-61c4af230f95	2024-01-14 18:57:42.186127+00	Do kada se moze prijaviti za smjestaj u domu?	Studentski dom	2024-01-14 21:15:39.259016+00	2432e2d0-6b31-4b75-b2d9-43a829f6af51	c644998b-87c0-4c07-a395-2cb41afc3ff3	f	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	0	1
149a0bbd-631b-43eb-b510-612072ece98b	2024-04-28 17:27:26.368562+00	Zna li iko kome se javljamo za odabir teme diplomskog rada?	Diplomski rad	2024-04-28 17:27:26.368585+00	612f2438-741f-48d0-9395-0ebe3f197347	c644998b-87c0-4c07-a395-2cb41afc3ff3	t	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	0	0
a03e9670-ceba-45be-9f01-8f55a4aef5ff	2024-01-14 21:32:42.308282+00	Volontira li jos iko ove godine na SFF-u? :D	SFF	2024-01-14 21:38:10.288682+00	fc429783-a2d1-454f-bb92-7c28ba781a00	bc5496e7-82c7-47a0-83f6-bb09e9e28120	f	140c65b3-d227-457c-851c-ffdfc46d3672	ffd95dc7-de79-4a4c-a646-7e7bca1bd66a	1	2
096d9bd5-9df2-44f2-a77c-aee3d803e308	2023-10-28 21:52:25.218746+00	Uzbudljive vijesti stižu sa našeg univerziteta! Ponosno dijelimo da je naš tim studenata i profesora osvojio prvo mjesto na nacionalnom takmičenju iz robotike. Ovo postignuće je dokaz predanosti, vještine i timskog rada našeg univerziteta.\n\nOvaj uspeh nije samo trofej za našu vitrinu, već je to dokaz da smo među najboljima u zemlji u oblasti tehnologije. Kroz godine napornog rada i truda, stvorili smo okruženje gde se veliki snovi pretvaraju u stvarnost.	Robotika	2024-01-14 19:03:55.144587+00	909d0477-d2bf-49d3-a38d-5b20eb299efb	c644998b-87c0-4c07-a395-2cb41afc3ff3	t	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	9	6
ddf37629-e17f-4a2d-8bb1-95a6d9262d67	2024-01-14 21:19:51.855499+00	Ima li iko od vas iskustva sa ferijalnim radom u Njemačkoj? Želio bih ići ali imam par nedoumica.	Ferijalni rad	2024-01-14 21:38:21.181341+00	1422f843-3543-4acd-b6a7-fc78a9468275	a14b8467-c05e-4ae3-96c9-83bd5c690392	f	cd9722d7-bc5c-47cf-9a1e-0fdf8db80724	3d33be27-0d38-4082-90ea-277f706f9d73	4	6
bc8b8740-224e-4fbc-b161-d5510e8f2176	2024-05-14 16:42:40.279471+00	Do koliko radi fakultet subotom?	Radno vrijeme fakulteta	2024-05-14 16:42:40.279502+00	58db39e1-caa6-4d41-aff2-20eea3a43ab6	c644998b-87c0-4c07-a395-2cb41afc3ff3	t	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	0	0
d8c5e57a-d503-4927-868a-20ce4980927d	2024-04-28 16:47:20.316562+00	Ćao raja, imam pitanje u vezi ispita iz inženjerske matematike. Nego, znate li slučajno koliko zadataka će biti na ispitu i iz kojih oblasti će biti? Čula sam iz nekoliko izvora različite odgovore, a profesor mi ne odgovara na mailove, pa da probam ovako.	Ispit iz matematike	2024-04-28 16:47:20.316617+00	612f2438-741f-48d0-9395-0ebe3f197347	c644998b-87c0-4c07-a395-2cb41afc3ff3	t	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	0	0
e16293e2-8f60-416d-a6da-8f388441d905	2024-01-14 19:16:11.52824+00	Pozdrav, zna li neko koliko se pika volontiranje kada se stavi u CV? :)	Volontiranje i CV	2024-01-14 21:24:24.161446+00	fc429783-a2d1-454f-bb92-7c28ba781a00	c644998b-87c0-4c07-a395-2cb41afc3ff3	f	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	0	3
a6705fb9-b1fb-44f4-bc0a-0d5aafeb3aeb	2024-01-14 18:59:17.388339+00	Koliko nas ide na apsolventsko vecer?	Apsolventsko vecer	2024-01-14 21:15:38.073949+00	9be38b4b-4cbb-4ec6-b343-d540bb11e10b	c644998b-87c0-4c07-a395-2cb41afc3ff3	f	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	1	1
bc6d31bc-b46c-4ecb-90ae-512399cb5e0f	2024-01-14 18:46:57.101596+00	Putuje li iko iz Sarajeva za Zenicu sutra?	Zenica	2024-01-14 18:46:57.101615+00	9be38b4b-4cbb-4ec6-b343-d540bb11e10b	c644998b-87c0-4c07-a395-2cb41afc3ff3	f	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	0	0
b8703278-5518-4896-bbcd-7e52094a4a57	2024-01-14 19:04:21.703182+00	Hejj, znate li koji papiri se trebaju dostaviti za razmjenu studenata za Holandiju?	Erasmus - Holandija	2024-01-14 21:31:23.306454+00	4f984372-0f23-4cf9-aa70-b554a6c0fe2e	c644998b-87c0-4c07-a395-2cb41afc3ff3	f	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	2	3
b42fdcb8-d4be-40b7-b1fb-9805f78adf16	2024-01-14 18:59:38.485913+00	Kakva su vasa iskustva sa studentskim domom?	Dom	2024-01-14 21:15:35.893483+00	2432e2d0-6b31-4b75-b2d9-43a829f6af51	c644998b-87c0-4c07-a395-2cb41afc3ff3	f	899f1707-e304-479b-aa8b-a351f8a2a46f	3d33be27-0d38-4082-90ea-277f706f9d73	1	2
\.


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.comments (id, created_on, text, updated_on, post_id, user_id) FROM stdin;
bf2024ea-bb65-4dc5-ba5f-bb0a703e3884	2023-11-26 22:15:31.86463+00	Ovo je komentar. Nije najduzi al okkkk je.	2023-11-26 22:15:31.86471+00	096d9bd5-9df2-44f2-a77c-aee3d803e308	c644998b-87c0-4c07-a395-2cb41afc3ff3
aa38e4cf-4eb3-470b-9225-f4ccba11f95e	2023-12-10 13:15:26.133144+00	Ovo je komentar. Nije najduzi al okkkk je.	2023-12-10 13:15:26.133216+00	096d9bd5-9df2-44f2-a77c-aee3d803e308	c644998b-87c0-4c07-a395-2cb41afc3ff3
1b60870a-86ba-4785-a7c4-9bf7ad00350f	2023-12-10 13:15:36.982823+00	Ovo je kratak komentar.	2023-12-10 13:15:36.982862+00	096d9bd5-9df2-44f2-a77c-aee3d803e308	c644998b-87c0-4c07-a395-2cb41afc3ff3
0b24d46a-b1f2-4899-b156-57c7c84e278d	2023-12-10 13:15:57.682478+00	Ovo je dug komentar. Bas je dug. dug dug dug dug dug dug i dosadan i sta cu sad i ono eto ok je.	2023-12-10 13:15:57.682519+00	096d9bd5-9df2-44f2-a77c-aee3d803e308	c644998b-87c0-4c07-a395-2cb41afc3ff3
05ce16eb-87af-449f-9dab-768f5ba6773c	2023-12-10 13:30:00.716842+00	Ovo je novi novcati komentar	2023-12-10 13:30:00.716868+00	096d9bd5-9df2-44f2-a77c-aee3d803e308	c644998b-87c0-4c07-a395-2cb41afc3ff3
c9abf6ff-9a17-4993-a955-35a41ae68575	2024-01-13 22:00:10.568192+00	Komentar 123	2024-01-13 22:00:10.568218+00	096d9bd5-9df2-44f2-a77c-aee3d803e308	c644998b-87c0-4c07-a395-2cb41afc3ff3
fcfa5a36-92cd-4c4a-a130-a82606e27133	2024-01-13 22:00:25.683997+00	Komentar 123	2024-01-13 22:00:25.684022+00	096d9bd5-9df2-44f2-a77c-aee3d803e308	c644998b-87c0-4c07-a395-2cb41afc3ff3
d9b7404e-ccb1-462f-9244-7908b2dad0dc	2024-01-14 18:29:44.675938+00	Prvi komentar	2024-01-14 18:29:44.676014+00	b92c6479-00cd-469a-ac2d-3882775ce4e5	c644998b-87c0-4c07-a395-2cb41afc3ff3
bacef79a-43c5-4c46-b131-98b2e5dc8c44	2024-01-14 18:36:05.909296+00	Drugi komentar	2024-01-14 18:36:05.909316+00	b92c6479-00cd-469a-ac2d-3882775ce4e5	c644998b-87c0-4c07-a395-2cb41afc3ff3
ff2da302-d28b-4b2e-b44d-aa28e47faf7b	2024-01-14 18:36:42.501095+00	Treci post	2024-01-14 18:36:42.501115+00	b92c6479-00cd-469a-ac2d-3882775ce4e5	c644998b-87c0-4c07-a395-2cb41afc3ff3
be9cacfe-5e1a-4347-9d59-7afbb6050b17	2024-01-14 18:37:46.056166+00	Cetvrti pokusaj	2024-01-14 18:37:46.056194+00	b92c6479-00cd-469a-ac2d-3882775ce4e5	c644998b-87c0-4c07-a395-2cb41afc3ff3
dba3ed81-bef1-49bd-a271-f5d9c96dd798	2024-01-14 18:38:45.16718+00	Peti pokusaj	2024-01-14 18:38:45.167199+00	b92c6479-00cd-469a-ac2d-3882775ce4e5	c644998b-87c0-4c07-a395-2cb41afc3ff3
fd200fcc-64b7-486d-ac30-947c563304af	2024-01-14 18:39:09.783161+00	Sesta sreca	2024-01-14 18:39:09.783181+00	b92c6479-00cd-469a-ac2d-3882775ce4e5	c644998b-87c0-4c07-a395-2cb41afc3ff3
6fa8782e-17e5-4878-9df7-9541b956c658	2024-01-14 18:41:22.194495+00	Sedam	2024-01-14 18:41:22.194513+00	b92c6479-00cd-469a-ac2d-3882775ce4e5	c644998b-87c0-4c07-a395-2cb41afc3ff3
45877169-20f2-4acf-a61b-87c936333809	2024-01-14 19:02:04.897335+00	Ide gas	2024-01-14 19:02:04.897359+00	096d9bd5-9df2-44f2-a77c-aee3d803e308	c644998b-87c0-4c07-a395-2cb41afc3ff3
62016bff-f57e-498e-862a-924b1516e8a2	2024-01-14 19:03:55.139583+00	Radi;)	2024-01-14 19:03:55.139606+00	096d9bd5-9df2-44f2-a77c-aee3d803e308	c644998b-87c0-4c07-a395-2cb41afc3ff3
735863ca-ca21-4a86-b8e2-a4dc7227f895	2024-01-14 19:05:35.482526+00	Novi komentar	2024-01-14 19:05:35.482544+00	b42fdcb8-d4be-40b7-b1fb-9805f78adf16	c644998b-87c0-4c07-a395-2cb41afc3ff3
369eedbb-ec11-444c-afa4-4e3478b669a7	2024-01-14 19:07:21.666852+00	Novi komentar	2024-01-14 19:07:21.66687+00	4c757360-d78b-44da-821c-9ec7b1be62b6	c644998b-87c0-4c07-a395-2cb41afc3ff3
0fc08f47-578d-4d81-8133-b0f35924b634	2024-01-14 19:07:52.893077+00	Novi	2024-01-14 19:07:52.893096+00	a6705fb9-b1fb-44f4-bc0a-0d5aafeb3aeb	c644998b-87c0-4c07-a395-2cb41afc3ff3
3c324a51-738a-497c-be7b-c155baf91850	2024-01-14 19:10:43.894903+00	Hmm	2024-01-14 19:10:43.894927+00	0377a9c6-2d14-405c-9771-2d6b562e5699	c644998b-87c0-4c07-a395-2cb41afc3ff3
bb88708d-54be-4683-84da-d64eead0fbe5	2024-01-14 19:12:13.705818+00	:((((((	2024-01-14 19:12:13.705836+00	b8703278-5518-4896-bbcd-7e52094a4a57	c644998b-87c0-4c07-a395-2cb41afc3ff3
2e6da3a7-ab2e-45c4-b997-93374da4c8c4	2024-01-14 19:15:52.286401+00	Novi komentar	2024-01-14 19:15:52.286419+00	b8703278-5518-4896-bbcd-7e52094a4a57	c644998b-87c0-4c07-a395-2cb41afc3ff3
e9c4154b-bb89-41de-a073-d821b113b6ce	2024-01-14 21:16:13.086403+00	Hej, radim ja	2024-01-14 21:16:13.086428+00	4cd8237c-8501-47c5-a3cb-1b7e48df7d17	c644998b-87c0-4c07-a395-2cb41afc3ff3
1f4f3ea7-9f35-4baf-92b8-b73407c7b279	2024-01-14 21:21:12.240549+00	Radim i ja, ali bi mi vise odgovaralo online.	2024-01-14 21:21:12.240593+00	4cd8237c-8501-47c5-a3cb-1b7e48df7d17	5da402f0-6df2-4d8d-8068-b3ef4db60982
8a29a3dc-44dc-433b-94f1-2e00f64313f2	2024-01-14 21:21:33.337031+00	I mene zanima :D	2024-01-14 21:21:33.337049+00	ddf37629-e17f-4a2d-8bb1-95a6d9262d67	5da402f0-6df2-4d8d-8068-b3ef4db60982
4669bff5-5736-4dfd-9108-2b7a49c55fcb	2024-01-14 21:24:06.373354+00	Isla sam ja prosle godine, divno iskustvo je bilo. Sta te tacno zanima?	2024-01-14 21:24:06.373372+00	ddf37629-e17f-4a2d-8bb1-95a6d9262d67	8e1ea8f2-bb18-4966-861b-837eb5d90b5a
d953bcc8-4e32-4c99-a79c-110a558efcfc	2024-01-14 21:27:39.419213+00	I meni su potrebne	2024-01-14 21:27:39.41923+00	4cd8237c-8501-47c5-a3cb-1b7e48df7d17	0f6536a4-9235-46b1-8eed-c5a28501509d
96ba1e9c-0c86-44f8-acfb-2818ad6739d1	2024-01-14 21:28:36.703195+00	Bio sam ja u Hamburgu, vozio sam bicikl. Tezak je posao ali za studenta se veoma isplati. 	2024-01-14 21:28:36.703212+00	ddf37629-e17f-4a2d-8bb1-95a6d9262d67	0f6536a4-9235-46b1-8eed-c5a28501509d
eca5072e-6ef8-48e7-bca1-a83dc8c9cee8	2024-01-14 21:29:13.996562+00	Ja idem u Holandiju, isto me zanima :/	2024-01-14 21:29:13.99658+00	74e3dcb8-8266-4583-b292-494c18592c94	0f6536a4-9235-46b1-8eed-c5a28501509d
ff64c786-53ed-42da-8cde-91c90e2df7e3	2024-01-14 21:31:13.605198+00	Zavisi u kojem si gradu. U Banjoj Luci ima dosta teretana i sl koje su dio fitpassa.	2024-01-14 21:31:13.605218+00	c20e1f9b-c126-494d-8b1b-7b779b2fe484	bc5496e7-82c7-47a0-83f6-bb09e9e28120
1ace8ead-bdcd-4be1-99d0-667f651edaca	2024-01-14 21:31:57.529646+00	U koji grad ides?	2024-01-14 21:31:57.529665+00	ddf37629-e17f-4a2d-8bb1-95a6d9262d67	bc5496e7-82c7-47a0-83f6-bb09e9e28120
cad4cfd7-253a-4a74-8dc6-c407232098dd	2024-01-14 21:33:23.111889+00	Da!!	2024-01-14 21:33:23.111908+00	c20e1f9b-c126-494d-8b1b-7b779b2fe484	c644998b-87c0-4c07-a395-2cb41afc3ff3
a9664e23-c61b-4476-998d-1cdd49e2aa4c	2024-01-14 21:34:12.0169+00	Volontiram ja, vidimo se!!	2024-01-14 21:34:12.01692+00	a03e9670-ceba-45be-9f01-8f55a4aef5ff	c644998b-87c0-4c07-a395-2cb41afc3ff3
8774abe0-11e0-4525-a512-3db96f656bc7	2024-01-14 21:39:55.885573+00	Da, lijepo je moci mijenjati teretane bez obaveza	2024-01-14 21:39:55.885591+00	c20e1f9b-c126-494d-8b1b-7b779b2fe484	a14b8467-c05e-4ae3-96c9-83bd5c690392
9bc76f34-5fa3-45f2-92f7-8b2787ba5df0	2024-04-28 17:26:45.12537+00	Takodjer	2024-04-28 17:26:45.125392+00	74e3dcb8-8266-4583-b292-494c18592c94	c644998b-87c0-4c07-a395-2cb41afc3ff3
439a3c28-9ffb-4716-8d58-52a5c33b843b	2024-05-14 16:41:03.087304+00	Apsolutno :) 	2024-05-14 16:41:03.087353+00	c20e1f9b-c126-494d-8b1b-7b779b2fe484	c644998b-87c0-4c07-a395-2cb41afc3ff3
\.


--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.likes (id, created_on, post_id, user_id) FROM stdin;
f4d979e3-018d-4440-b870-06a95b7b5625	2023-11-21 21:43:08.396509+00	9850fbb8-609a-4495-8f54-9beba581133e	c644998b-87c0-4c07-a395-2cb41afc3ff3
beb3e580-43f4-4615-8452-13313a39790c	2024-01-13 22:00:34.291358+00	096d9bd5-9df2-44f2-a77c-aee3d803e308	c644998b-87c0-4c07-a395-2cb41afc3ff3
f589ac33-e93b-438d-ac93-6686152b1acb	2024-01-14 18:28:29.171782+00	b92c6479-00cd-469a-ac2d-3882775ce4e5	c644998b-87c0-4c07-a395-2cb41afc3ff3
41cecc68-8b92-4d7a-bd9c-87d50737596a	2024-01-14 19:04:05.272549+00	b42fdcb8-d4be-40b7-b1fb-9805f78adf16	c644998b-87c0-4c07-a395-2cb41afc3ff3
4096c70d-9be7-4f8e-a7d3-d8bc714d5700	2024-01-14 19:15:44.700701+00	b8703278-5518-4896-bbcd-7e52094a4a57	c644998b-87c0-4c07-a395-2cb41afc3ff3
5b930b0d-d899-4929-a9a1-4baaca9a305d	2024-01-14 21:15:34.058975+00	e16293e2-8f60-416d-a6da-8f388441d905	2b458b47-2a2c-42d7-a4a7-d79320e9db20
b0ba5660-5bdf-45d0-b38e-634bc4b85e8a	2024-01-14 21:15:35.891391+00	b42fdcb8-d4be-40b7-b1fb-9805f78adf16	2b458b47-2a2c-42d7-a4a7-d79320e9db20
7889d97a-bf49-4958-8695-2defeb9b8e9e	2024-01-14 21:15:38.071708+00	a6705fb9-b1fb-44f4-bc0a-0d5aafeb3aeb	2b458b47-2a2c-42d7-a4a7-d79320e9db20
194a888f-eff5-4e7f-856d-fe43949bb926	2024-01-14 21:15:39.256563+00	e4191b2c-165d-4d72-a652-61c4af230f95	2b458b47-2a2c-42d7-a4a7-d79320e9db20
478f5096-94b0-4ad4-9768-6c0bd561c981	2024-01-14 21:16:01.805738+00	4cd8237c-8501-47c5-a3cb-1b7e48df7d17	c644998b-87c0-4c07-a395-2cb41afc3ff3
a621224a-e016-4724-9fe3-ac655faf8b4e	2024-01-14 21:20:03.822761+00	e16293e2-8f60-416d-a6da-8f388441d905	a14b8467-c05e-4ae3-96c9-83bd5c690392
8fb6cfbc-10c5-4ecd-836e-e400b8e11565	2024-01-14 21:20:48.688271+00	4cd8237c-8501-47c5-a3cb-1b7e48df7d17	5da402f0-6df2-4d8d-8068-b3ef4db60982
469291f9-61fd-41c1-ac14-7a83bdb63933	2024-01-14 21:21:24.47172+00	ddf37629-e17f-4a2d-8bb1-95a6d9262d67	5da402f0-6df2-4d8d-8068-b3ef4db60982
3c1e94ac-3406-4dc1-a48b-61ac151ab203	2024-01-14 21:23:27.679019+00	ddf37629-e17f-4a2d-8bb1-95a6d9262d67	8e1ea8f2-bb18-4966-861b-837eb5d90b5a
de3cc23d-9272-40b2-8b76-8524327fd16c	2024-01-14 21:24:22.812503+00	b8703278-5518-4896-bbcd-7e52094a4a57	8e1ea8f2-bb18-4966-861b-837eb5d90b5a
815e57d4-d322-4af8-967c-fa66b06a0ef8	2024-01-14 21:24:24.159038+00	e16293e2-8f60-416d-a6da-8f388441d905	8e1ea8f2-bb18-4966-861b-837eb5d90b5a
1b553f87-1ae2-451b-a30c-d33af1e7dcbe	2024-01-14 21:27:11.695457+00	ddf37629-e17f-4a2d-8bb1-95a6d9262d67	0f6536a4-9235-46b1-8eed-c5a28501509d
7c6bf275-c6e3-41e2-9cdb-a13d60483f1b	2024-01-14 21:27:24.75194+00	4cd8237c-8501-47c5-a3cb-1b7e48df7d17	0f6536a4-9235-46b1-8eed-c5a28501509d
a15b77ca-7e89-4da7-af8d-202544b53d79	2024-01-14 21:28:43.994851+00	74e3dcb8-8266-4583-b292-494c18592c94	0f6536a4-9235-46b1-8eed-c5a28501509d
a2581120-6b64-4ef7-bffa-5435a26f340e	2024-01-14 21:30:27.664558+00	74e3dcb8-8266-4583-b292-494c18592c94	bc5496e7-82c7-47a0-83f6-bb09e9e28120
6a615e51-767a-41f3-a14c-884fbf066357	2024-01-14 21:30:39.621377+00	c20e1f9b-c126-494d-8b1b-7b779b2fe484	bc5496e7-82c7-47a0-83f6-bb09e9e28120
313d7c71-f01f-4326-8220-2d70ee2515fb	2024-01-14 21:31:21.935177+00	4cd8237c-8501-47c5-a3cb-1b7e48df7d17	bc5496e7-82c7-47a0-83f6-bb09e9e28120
c1b4d726-5cea-44a8-93ff-16330fcc6de7	2024-01-14 21:31:23.304315+00	b8703278-5518-4896-bbcd-7e52094a4a57	bc5496e7-82c7-47a0-83f6-bb09e9e28120
26fd0a65-01b2-42c7-8137-de4335f96faa	2024-01-14 21:31:28.842419+00	e3ed1c9b-5dec-46e2-a3dc-1bc4ce6ccd8c	bc5496e7-82c7-47a0-83f6-bb09e9e28120
dabd925b-d02b-486a-9bbb-7dcefc3aeed8	2024-01-14 21:31:44.90718+00	ddf37629-e17f-4a2d-8bb1-95a6d9262d67	bc5496e7-82c7-47a0-83f6-bb09e9e28120
bd4307b1-004c-49b2-88d0-5ead0d62dbe9	2024-01-14 21:33:14.569199+00	a03e9670-ceba-45be-9f01-8f55a4aef5ff	c644998b-87c0-4c07-a395-2cb41afc3ff3
70517ca4-f0eb-4a22-aa00-1c2744db7f57	2024-01-14 21:33:18.836226+00	c20e1f9b-c126-494d-8b1b-7b779b2fe484	c644998b-87c0-4c07-a395-2cb41afc3ff3
1d4c4b25-dfe7-4fb0-8449-99439b136170	2024-01-14 21:33:34.020935+00	ddf37629-e17f-4a2d-8bb1-95a6d9262d67	c644998b-87c0-4c07-a395-2cb41afc3ff3
b94ca1cc-5ce8-4ebb-8456-8ed8e837bd81	2024-01-14 21:33:45.831751+00	74e3dcb8-8266-4583-b292-494c18592c94	c644998b-87c0-4c07-a395-2cb41afc3ff3
020b5bfe-ad69-4c2e-bb79-f7091d69a0bd	2024-01-14 21:38:07.259364+00	b76a1c90-e68a-4b47-91f3-df904f337f9b	2b458b47-2a2c-42d7-a4a7-d79320e9db20
766e063f-9af9-4735-8945-722486d9d7a4	2024-01-14 21:38:10.286786+00	a03e9670-ceba-45be-9f01-8f55a4aef5ff	2b458b47-2a2c-42d7-a4a7-d79320e9db20
af500158-fef4-4771-8c8b-d6ee6b9b84c9	2024-01-14 21:38:13.005444+00	c20e1f9b-c126-494d-8b1b-7b779b2fe484	2b458b47-2a2c-42d7-a4a7-d79320e9db20
1d4b9622-50c0-4d3e-b4fd-67d8ba42e6de	2024-01-14 21:38:15.228317+00	74e3dcb8-8266-4583-b292-494c18592c94	2b458b47-2a2c-42d7-a4a7-d79320e9db20
09479bd0-c123-423d-83f9-6fb276188fbe	2024-01-14 21:38:21.17951+00	ddf37629-e17f-4a2d-8bb1-95a6d9262d67	2b458b47-2a2c-42d7-a4a7-d79320e9db20
8150bc3c-4bf8-4bc0-9108-e521a7eceb5b	2024-01-14 21:38:28.198567+00	4c757360-d78b-44da-821c-9ec7b1be62b6	2b458b47-2a2c-42d7-a4a7-d79320e9db20
d16b9617-5cf7-41dd-a5ea-aa9216d7b10c	2024-01-14 21:39:21.19889+00	e3ed1c9b-5dec-46e2-a3dc-1bc4ce6ccd8c	a14b8467-c05e-4ae3-96c9-83bd5c690392
794832f1-074e-45b0-beee-1473362a7659	2024-01-14 21:39:31.924544+00	c20e1f9b-c126-494d-8b1b-7b779b2fe484	a14b8467-c05e-4ae3-96c9-83bd5c690392
0ab3e74e-c36e-485d-8767-4f3ece57002c	2024-04-28 17:26:38.32301+00	e3ed1c9b-5dec-46e2-a3dc-1bc4ce6ccd8c	c644998b-87c0-4c07-a395-2cb41afc3ff3
\.


--
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.role (id, name) FROM stdin;
737fee98-70c0-11ee-b962-0242ac120001	ADMIN
737fee98-70c0-11ee-b962-0242ac120002	USER
\.


--
-- Data for Name: users_role; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users_role (users_id, role_id) FROM stdin;
c644998b-87c0-4c07-a395-2cb41afc3ff3	737fee98-70c0-11ee-b962-0242ac120002
2b458b47-2a2c-42d7-a4a7-d79320e9db20	737fee98-70c0-11ee-b962-0242ac120002
a14b8467-c05e-4ae3-96c9-83bd5c690392	737fee98-70c0-11ee-b962-0242ac120002
5da402f0-6df2-4d8d-8068-b3ef4db60982	737fee98-70c0-11ee-b962-0242ac120002
8e1ea8f2-bb18-4966-861b-837eb5d90b5a	737fee98-70c0-11ee-b962-0242ac120002
0f6536a4-9235-46b1-8eed-c5a28501509d	737fee98-70c0-11ee-b962-0242ac120002
bc5496e7-82c7-47a0-83f6-bb09e9e28120	737fee98-70c0-11ee-b962-0242ac120002
\.


--
-- PostgreSQL database dump complete
--

