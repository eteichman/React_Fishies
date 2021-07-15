create database EstherFishies;

create table WaterType (
	WaterTypeId int primary key,
	WaterTypeName varchar(255) not null,
);

create table FishType (
	FishTypeId int primary key,
	FishTypeName varchar(255) not null,
	WaterTypeId int not null,
);

create table FishData (
	FishId int primary key,
	FishName varchar(255) not null,
	ScientificName varchar(255) not null,
	FishTypeId int not null,
	FishUrl varchar(255) not null,
);

create table FishImages (
	ImagePath varchar(255) not null unique,
	FishId int,
	foreign key (FishId) references FishData(FishId)
);

insert into WaterType (WaterTypeId, WaterTypeName) 
	values  (1, 'Freshwater'), 
			(2, 'Coldwater Freshwater'), 
			(3, 'Marine');

insert into FishType (FishTypeId, FishTypeName, WaterTypeId)
	values  (1, 'Catfish', 1), 
			(2, 'Rasbora', 1), 
			(3, 'Tetra', 1), 
			(4, 'Loach', 1), 
			(5, 'Goldfish', 2), 
			(6, 'Anemonefish', 3);


insert into FishData (FishName, ScientificName, FishTypeId, FishUrl)
	values  (1, 'Harlequin Rasbora', 'Trigonostigma heteromorpha', 2, 'https://en.wikipedia.org/wiki/Harlequin_rasbora'), 
			(2, 'Panda Corydoras', 'Corydoras panda', 1, 'https://en.wikipedia.org/wiki/Corydoras_panda'), 
			(3, 'Sterba''s Corydoras', 'Corydoras sterbai', 1, 'https://en.wikipedia.org/wiki/Sterba''s_corydoras'), 
			(4, 'Cardinal Tetra', 'Paracheirodon axelrodi', 3, 'https://en.wikipedia.org/wiki/Cardinal_tetra'), 
			(5, 'Common_Goldfish', 'Carassius auratus', 5, 'https://en.wikipedia.org/wiki/Common_goldfish'), 
			(6, 'Redtail Rasbora', 'Rasbora borapetensis', 2, 'https://en.wikipedia.org/wiki/Blackline_rasbora'), 
			(7, 'Julii Corydoras', 'Corydoras julii', 1, 'https://en.wikipedia.org/wiki/Corydoras_julii'), 
			(8, 'Zebra Loach', 'Botia striata', 4, 'https://en.wikipedia.org/wiki/Zebra_loach'), 
			(9, 'Clown Anemonefish', 'Amphiprioninae percula', 1, 'https://en.wikipedia.org/wiki/Amphiprioninae'),
			(10, 'Fantail Goldfish', 'Carassius auratus', 5, 'https://en.wikipedia.org/wiki/Fantail_(goldfish)');

--Credit for images to commons.wikimedia.org licensed under https://creativecommons.org/licenses/by-sa/3.0/
insert into FishImages (ImagePath, FishId)
	values	('../Images/Harlequin_Rasbora.jpg', 1),
			('../Images/Harlequin_Rasbora_2.jpg', 1),
			('../Images/Harlequin_Rasbora_3.jpg', 1),
			('../Images/Panda_Corydoras.jpg', 2),
			('../Images/Panda_Corydoras_2.jpg', 2),
			('../Images/Panda_Corydoras_3.jpg', 2),
			('../Images/Corydoras_Sterbai.jpg', 3),
			('../Images/Corydoras_Sterbai_2.jpg', 3),
			('../Images/Corydoras_Sterbai_3.jpg', 3),
			('../Images/Cardinal_Tetra.jpg', 4),
			('../Images/Cardinal_Tetra_2.jpg', 4),
			('../Images/Cardinal_Tetra_3.jpg', 4),
			('../Images/Common_Goldfish.jpg', 5),
			('../Images/Common_Goldfish_2.jpg', 5),
			('../Images/Common_Goldfish_3.jpg', 5),
			('../Images/Redtail_Rasbora.jpg', 6),
			('../Images/Redtail_Rasbora_2.jpg', 6),
			('../Images/Redtail_Rasbora_3.jpg', 6),
			('../Images/Julii_Corydoras.jpg/', 7),
			('../Images/Julii_Corydoras_2.jpg/', 7),
			('../Images/Julii_Corydoras_3.jpg/', 7),
			('../Images/Zebra_Loach.jpg', 8),
			('../Images/Zebra_Loach_2.jpg', 8),
			('../Images/Zebra_Loach_3.jpg', 8),
			('../Images/Clownfish.jpg', 9),
			('../Images/Clownfish_2.jpg', 9),
			('../Images/Clownfish_3.jpg', 9),
			('../Images/Fantail_Goldfish.jpg', 10),
			('../Images/Fantail_Goldfish_2.jpg', 10),
			('../Images/Fantail_Goldfish_3.jpg', 10);
