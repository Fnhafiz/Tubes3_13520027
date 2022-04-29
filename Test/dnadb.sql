-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: dnadb
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hasil_prediksi`
--

DROP TABLE IF EXISTS `hasil_prediksi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hasil_prediksi` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tanggal_prediksi` date NOT NULL,
  `nama_pasien` varchar(45) NOT NULL,
  `penyakit_prediksi` varchar(45) NOT NULL,
  `status_prediksi` varchar(20) NOT NULL,
  `tingkat_kemiripan` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hasil_prediksi`
--

LOCK TABLES `hasil_prediksi` WRITE;
/*!40000 ALTER TABLE `hasil_prediksi` DISABLE KEYS */;
INSERT INTO `hasil_prediksi` VALUES (1,'2022-04-25','Farhan','Fever','No',50),(2,'2022-04-26','Hafiz','Fever','Yes',100),(3,'2022-04-25','Anonim','Flu','Yes',90),(4,'2022-04-24','Haidar','Cough','No',90),(5,'2022-04-29','Ilham','Headhace','Yes',90),(6,'2022-04-29','Budi','Fever','No',25),(13,'2022-04-29','Budi','Cough','No',25),(14,'2022-04-29','Budi','Cough','Yes',100),(15,'2022-04-29','Sinta','Cough','No',25),(16,'2022-04-29','Haidar','Stomachache','No',50),(17,'2022-04-29','farhan','Stomachache','No',50),(18,'2022-04-29','Ilham','Stomachache','No',50),(19,'2022-04-29','Ilham','Stomachache','No',50),(20,'2022-04-29','Siapa ya','Stomachache','No',100),(21,'2022-04-29','Monica','Cough','Yes',92),(22,'2022-04-29','Halo','Cough','Yes',92),(23,'2022-04-29','Hambin','Cough','No',75),(24,'2022-04-29','Budi','Cough','No',75),(25,'2022-04-29','Sinta','Cough','Yes',100),(26,'2022-04-29','Hafiz','Cough','No',75),(27,'2022-04-29','Hafiz','Cough','Yes',92);
/*!40000 ALTER TABLE `hasil_prediksi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jenis_penyakit`
--

DROP TABLE IF EXISTS `jenis_penyakit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jenis_penyakit` (
  `nama_penyakit` varchar(45) NOT NULL,
  `dna_penyusun` varchar(255) NOT NULL,
  PRIMARY KEY (`nama_penyakit`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jenis_penyakit`
--

LOCK TABLES `jenis_penyakit` WRITE;
/*!40000 ALTER TABLE `jenis_penyakit` DISABLE KEYS */;
INSERT INTO `jenis_penyakit` VALUES ('Cough','ATGTCGTATCGT'),('Fever','AGCTAGCT'),('Flu','AAGGCCTTAA'),('Headhace','ATTCCGGCCTTA'),('Itchy','ATTTTATTTTGTTTT'),('Stomachache','AGAGAGAG'),('Toothache','AAAAAAAAAAAAAAAAAAAA');
/*!40000 ALTER TABLE `jenis_penyakit` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-29 23:25:14
