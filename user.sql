-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2018 at 04:49 PM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cred_admin`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `level` int(11) DEFAULT NULL,
  `signature` varchar(200) DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `role` enum('ADMIN','CREDIT_ADMIN','SUPERVISOR','CALL_CENTER') NOT NULL DEFAULT 'ADMIN',
  `active` tinyint(1) DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `user_name`, `level`, `signature`, `password`, `name`, `email`, `phone`, `role`, `active`) VALUES
(1, 'test', 1, 'img_sig\\test_user.png', 'new', 'Test User', 'fname.lname@fhccu.com', '2002', 'ADMIN', 1),
(2, 'RBuchanan', 1, 'img_sig\\roc_buc_sig.png', '$2a$10$Qg2uy1Gkuo25hv.iaHPPsONRvjVf/xytG7I.vQHXmpthNWCSioMlO', 'Roechelle Buchanan', 'Roechelle.Buchanan@fhccu.com', '2456', 'CREDIT_ADMIN', 1),
(3, 'aperry', 0, NULL, '$2a$10$Qg2uy1Gkuo25hv.iaHPPsONRvjVf/xytG7I.vQHXmpthNWCSioMlO', 'Arnold Perry', 'Arnold.Perry@fhccu.com', '', 'CALL_CENTER', 1),
(4, 'swhyte', 0, NULL, '$2a$10$Qg2uy1Gkuo25hv.iaHPPsONRvjVf/xytG7I.vQHXmpthNWCSioMlO', 'Simone Whyte', 'Simone.Whyte@fhccu.com', '', 'CALL_CENTER', 1),
(5, 'cmiller', 0, NULL, 'password', 'Choy Miller', 'choy.miller@fhccu.com', '', 'ADMIN', 1),
(6, 'nnugent', 1, 'img_sig\\neeva_sig.png', 'password', 'Neeva Nugent', 'Neeva.Nugent@fhccu.com', '', 'ADMIN', 1),
(7, 'ybryan', 1, 'img_sig\\yvette_sig.png', '$2a$10$0ZA6NS92fAhIb.d5UzcabuHSRFENTbtehY//HVGMd9PVAmL0sDeqq', 'Yvette Bryan', 'Yvette.Bryan@fhccu.com', '2458', 'CREDIT_ADMIN', 1),
(8, 'rspence', 1, 'img_sig\\rita_sig.png', '$2a$10$dk8iu/k2vvsgLXeK416cLuP2exEdIz2JNbt5xgpmrAD57C9zKVIlm', 'Rita Spence', 'Rita.Spence@fhccu.com', '2370', 'CREDIT_ADMIN', 1),
(9, 'swatson', 1, 'img_sig\\sophia_sig.png', 'password', 'Sophia Watson', 'Sophia.Watson@fhccu.com', '', 'ADMIN', 1),
(11, 'gangus', 1, NULL, 'password', 'Georgett Angus', 'Georgett.Angus@fhccu.com', '', 'ADMIN', 1),
(12, 'QHarrison', 1, NULL, '$2a$10$z4EHTIec5/546xJj1KV5TunaQsa1o.EEfAJsIye6o4ZWgRqvF4JnG', 'Quilston Harrison', 'Quilston.Harrison@fhccu.com', '', 'ADMIN', 1),
(13, 'ZJones', 1, 'img_sig\\zen_jon_sig.png', '$2a$10$dI1XLGr1.wspAkDrOh44U.JG2grPefKii4hW9BmOuDVxkmefnVflW', 'Zendean Jones', 'Zendean.Jones@fhccu.com', '2713', 'CREDIT_ADMIN', 1),
(14, 'rgayle', 1, NULL, 'password', 'Rene Gayle', 'rene.gayle@fhccu.com', '', 'ADMIN', 1),
(15, 'ddevonish', 0, NULL, 'password', 'Dayna Devonish ', 'Dayna.Devonish@fhccu.com', '', 'ADMIN', 1),
(19, 'ksimmonds', NULL, 'img_sig\\kadian_sig.png', '$2a$10$o3dS38sEMkoRtARtCSbz0eb95AzgM7F4PL3ghEvJs2v1Da8ii.TwW', 'Kadiann Simmonds', 'kadiann.simmonds@fhccu.com', '2359', 'CREDIT_ADMIN', 1),
(17, 'admin', 0, NULL, '$2a$10$0/075mBdO0rgD5zvn1.vpOcK1BgaSswumDfpw0s0/TPAgl.9GPHbi', 'Admin', 'delano.walters@fhccu.com', '1234', 'ADMIN', 1),
(18, 'tgivans', NULL, 'img_sig\\tavia_sig.png', '$2a$10$ddTBqAjIVEr66zzIRxswmudkWknjXbx1gx.8NeEwHonnWZhBvFd/.', 'Tavia Givans', 'Tavia.Givan@fhccu.com', '2534', 'CREDIT_ADMIN', 1),
(20, 'Amiller', NULL, NULL, '$2a$10$ozZxlAVgs52.Yi5uCGDCmu9iTny2kTdf17UukhCj9mtPnhjcYvwW6', 'Ashara Miller', 'Ashara.Miller@fhccu.com', '', 'CALL_CENTER', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;