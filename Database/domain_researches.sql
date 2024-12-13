-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2024 at 08:26 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `domain_researches`
--

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `history_id` varchar(255) NOT NULL,
  `domain` varchar(255) NOT NULL,
  `details` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `execute_time_mils` bigint(20) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`history_id`, `domain`, `details`, `execute_time_mils`, `date`) VALUES
('0561f1e3-b4a1-4dd2-9a80-f858467fed2b-rame.com', 'rame.com', '[{\"hosts\":[],\"shodan\":[]}]', 8253, '2024-12-13 06:36:36'),
('08890e1b-7ef5-4e24-8a5c-aa8877337824-google.com', 'google.com', '[{\"hosts\":[\"2Fencrypted.google.com\",\"2Fpatents.google.com\",\"2Fsupport.google.com\",\"Encrypted.google.com\",\"accounts.google.com\",\"apis.google.com\",\"encrypted.google.com\",\"ogs.google.com\",\"patents.google.com\",\"policies.google.com\",\"support.google.com\",\"trends.google.com\"],\"shodan\":[]}]', 17702, '2024-12-13 06:34:30'),
('0914057d-b4b0-4436-8ab0-5c885301ad03-google.com', 'google.com', '[{\"hosts\":[\"2Fencrypted.google.com\",\"2Fpatents.google.com\",\"2Fsupport.google.com\",\"Encrypted.google.com\",\"accounts.google.com\",\"apis.google.com\",\"encrypted.google.com\",\"ogs.google.com\",\"patents.google.com\",\"policies.google.com\",\"support.google.com\",\"trends.google.com\"],\"shodan\":[]}]', 15272, '2024-12-13 07:19:18'),
('10a50133-23ce-43e2-975d-2959b6c563c8-rame.com', 'rame.com', '[{\"hosts\":[],\"shodan\":[]}]', 11617, '2024-12-13 06:46:56'),
('259e1204-a853-41d0-924f-a5cb548112da-rame.com', 'rame.com', '[{\"hosts\":[],\"shodan\":[]}]', 10282, '2024-12-13 06:39:59'),
('264464cc-381d-4337-9bff-e2a8c510b60c-rame.com', 'rame.com', '[{\"hosts\":[],\"shodan\":[]}]', 10033, '2024-12-13 06:39:03'),
('28a85630-fa55-4ff6-ab42-4dd580021df9-google.com', 'google.com', '[{\"hosts\":[\"2Fencrypted.google.com\",\"2Fpatents.google.com\",\"2Fsupport.google.com\",\"Encrypted.google.com\",\"accounts.google.com\",\"apis.google.com\",\"encrypted.google.com\",\"ogs.google.com\",\"patents.google.com\",\"policies.google.com\",\"support.google.com\",\"trends.google.com\"],\"shodan\":[]}]', 16203, '2024-12-13 05:54:57'),
('2a000962-3d30-4153-9d28-1b5ba2313543-google.com', 'google.com', '[{\"hosts\":[\"2Fencrypted.google.com\",\"2Fpatents.google.com\",\"2Fsupport.google.com\",\"Encrypted.google.com\",\"accounts.google.com\",\"apis.google.com\",\"encrypted.google.com\",\"ogs.google.com\",\"patents.google.com\",\"policies.google.com\",\"support.google.com\",\"trends.google.com\"],\"shodan\":[]}]', 14627, '2024-12-13 04:51:11'),
('2befbf40-6d1e-4c5e-a997-9153e0c59d64-rame.com', 'rame.com', '[{\"hosts\":[],\"shodan\":[]}]', 10117, '2024-12-13 06:35:25'),
('32a040fb-4b16-458b-ba92-c4f560d67592-rame.com', 'rame.com', '[{\"hosts\":[],\"shodan\":[]}]', 9866, '2024-12-13 07:07:39'),
('39f45a49-206c-4c10-9bdc-e5eb3eba520c-rame.com', 'rame.com', '[{\"hosts\":[],\"shodan\":[]}]', 8004, '2024-12-13 07:19:37'),
('3c9f46fc-d6e7-45e0-89b1-cae414e272c8-google.com', 'google.com', '[{\"hosts\":[\"2Fencrypted.google.com\",\"2Fpatents.google.com\",\"2Fsupport.google.com\",\"Encrypted.google.com\",\"accounts.google.com\",\"apis.google.com\",\"encrypted.google.com\",\"ogs.google.com\",\"patents.google.com\",\"policies.google.com\",\"support.google.com\",\"trends.google.com\"],\"shodan\":[]}]', 14638, '2024-12-13 07:10:37'),
('3fe049e4-9d57-4a47-b523-a43cded9dfa8-google.com', 'google.com', '[{\"hosts\":[\"2Fencrypted.google.com\",\"2Fpatents.google.com\",\"2Fsupport.google.com\",\"Encrypted.google.com\",\"accounts.google.com\",\"apis.google.com\",\"encrypted.google.com\",\"ogs.google.com\",\"patents.google.com\",\"policies.google.com\",\"support.google.com\",\"trends.google.com\"],\"shodan\":[]}]', 14454, '2024-12-13 07:11:16'),
('40a453df-1af1-4d85-83b6-4e1088b80b2c-rame.com', 'rame.com', '[{\"hosts\":[],\"shodan\":[]}]', 8112, '2024-12-13 07:04:01'),
('4d77993e-f60d-4dba-bb9b-94096acfa711-rame.com', 'rame.com', '[{\"hosts\":[],\"shodan\":[]}]', 10358, '2024-12-13 06:41:59'),
('53ba62a5-0b87-4504-9d0f-afdc30d78376-rame.com', 'rame.com', '[{\"hosts\":[],\"shodan\":[]}]', 8062, '2024-12-13 07:12:32'),
('5964cd72-8b9a-4c48-9359-59ad12000056-google.com', 'google.com', '[{\"hosts\":[\"2Fencrypted.google.com\",\"2Fpatents.google.com\",\"2Fsupport.google.com\",\"Encrypted.google.com\",\"accounts.google.com\",\"apis.google.com\",\"encrypted.google.com\",\"ogs.google.com\",\"patents.google.com\",\"policies.google.com\",\"support.google.com\",\"trends.google.com\"],\"shodan\":[]}]', 17912, '2024-12-13 06:30:12'),
('5dcc40e0-7bdd-42b1-ba6f-e3ad6b756385-rame.com', 'rame.com', '[{\"hosts\":[],\"shodan\":[]}]', 9296, '2024-12-13 07:02:24'),
('6ccd21b8-a1e8-40c6-8fca-f92a8047674b-rame.com', 'rame.com', '[{\"hosts\":[],\"shodan\":[]}]', 7998, '2024-12-13 07:09:32'),
('6df99aca-28f5-4424-95ff-bb5253802f64-google.com', 'google.com', '[{\"hosts\":[\"2Fencrypted.google.com\",\"2Fpatents.google.com\",\"2Fsupport.google.com\",\"Encrypted.google.com\",\"accounts.google.com\",\"apis.google.com\",\"encrypted.google.com\",\"ogs.google.com\",\"patents.google.com\",\"policies.google.com\",\"support.google.com\",\"trends.google.com\"],\"shodan\":[]}]', 15055, '2024-12-13 05:53:32'),
('747c049e-7440-423c-9fe6-13041659ff09-rame.com', 'rame.com', '[{\"hosts\":[],\"shodan\":[]}]', 8056, '2024-12-13 07:04:38'),
('7bcef316-f133-4aa0-a6ab-b26149664609-rame.com', 'rame.com', '[{\"hosts\":[],\"shodan\":[]}]', 8448, '2024-12-13 06:59:43'),
('9ec215c5-b63d-4f01-ae25-ef3834df17ac-rame.com', 'rame.com', '[{\"hosts\":[],\"shodan\":[]}]', 8073, '2024-12-13 07:09:48'),
('a01ae4b0-97b2-4f63-bcf9-7a92c03e54b9-google.com', 'google.com', '[{\"hosts\":[\"2Fencrypted.google.com\",\"2Fpatents.google.com\",\"2Fsupport.google.com\",\"Encrypted.google.com\",\"accounts.google.com\",\"apis.google.com\",\"encrypted.google.com\",\"ogs.google.com\",\"patents.google.com\",\"policies.google.com\",\"support.google.com\",\"trends.google.com\"],\"shodan\":[]}]', 14279, '2024-12-13 06:30:27'),
('a1e23229-d419-48bc-8a30-64a97aaa430f-rame.com', 'rame.com', '[{\"hosts\":[],\"shodan\":[]}]', 13018, '2024-12-13 06:58:24'),
('a822d66c-626d-492b-adb3-b7698490f22c-google.com', 'google.com', '[{\"hosts\":[\"2Fencrypted.google.com\",\"2Fpatents.google.com\",\"2Fsupport.google.com\",\"Encrypted.google.com\",\"accounts.google.com\",\"apis.google.com\",\"encrypted.google.com\",\"ogs.google.com\",\"patents.google.com\",\"policies.google.com\",\"support.google.com\",\"trends.google.com\"],\"shodan\":[]}]', 16771, '2024-12-13 06:11:09'),
('b1406ad6-cce0-4bd6-b50e-27abd2fbd40b-rame.com', 'rame.com', '[{\"hosts\":[],\"shodan\":[]}]', 8826, '2024-12-13 07:09:12'),
('b5a26008-16dd-4616-997c-8e380ef681f6-rame.com', 'rame.com', '[{\"hosts\":[],\"shodan\":[]}]', 10049, '2024-12-13 06:59:32'),
('b792fa92-11b2-42c9-9dd5-d35b36ff74f4-rame.com', 'rame.com', '[{\"hosts\":[],\"shodan\":[]}]', 8184, '2024-12-13 07:06:22'),
('bb375f04-0c49-4b85-9129-151e8f84a5e2-rame.com', 'rame.com', '[{\"hosts\":[],\"shodan\":[]}]', 8184, '2024-12-13 06:35:50'),
('bf484794-185c-4ac4-9a87-c4e184a2a490-google.com', 'google.com', '[{\"hosts\":[\"2Fencrypted.google.com\",\"2Fpatents.google.com\",\"2Fsupport.google.com\",\"Encrypted.google.com\",\"accounts.google.com\",\"apis.google.com\",\"encrypted.google.com\",\"ogs.google.com\",\"patents.google.com\",\"policies.google.com\",\"support.google.com\",\"trends.google.com\"],\"shodan\":[]}]', 18848, '2024-12-13 05:49:31'),
('eea107ba-646f-4205-951c-54af89534733-dsad.com', 'dsad.com', '[{\"hosts\":[],\"shodan\":[]}]', 11264, '2024-12-13 06:00:12'),
('f293a912-36f8-4faf-b4a1-d2bc44f42e2b-google.com', 'google.com', '[{\"hosts\":[\"2Fencrypted.google.com\",\"2Fpatents.google.com\",\"2Fsupport.google.com\",\"Encrypted.google.com\",\"accounts.google.com\",\"apis.google.com\",\"encrypted.google.com\",\"ogs.google.com\",\"patents.google.com\",\"policies.google.com\",\"support.google.com\",\"trends.google.com\"],\"shodan\":[]}]', 14875, '2024-12-13 07:16:42'),
('f2e6f512-3bec-46cd-b7c6-151c400e0f3e-rame.com', 'rame.com', '[{\"hosts\":[],\"shodan\":[]}]', 7822, '2024-12-13 07:15:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD UNIQUE KEY `history_id` (`history_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
