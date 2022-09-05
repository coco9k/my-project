-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 05, 2022 at 06:30 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `arc_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `id` int(11) NOT NULL,
  `alt` text CHARACTER SET utf8 NOT NULL,
  `banner_image` text CHARACTER SET latin1 NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`id`, `alt`, `banner_image`, `date`) VALUES
(1, 'a', 'https://img.4gamers.com.tw/ads-media/1a3a95a3-754b-4e57-a14a-4f83f08b2927.jpg', '2022-08-25'),
(5, 'b', 'https://www.img.in.th/images/770455117547c65b68b89d709c86108f.png', '2022-08-24'),
(7, 'c', 'https://www.img.in.th/images/cf203f7534b8c32a40249b8194b79e4e.png', '2022-08-24'),
(9, 'e', 'https://www.img.in.th/images/fd915d46e171a529861b174a34647262.png', '2022-08-25'),
(11, 'd', 'https://www.img.in.th/images/f659b48d6909307a9ac0042ee657601e.png', '2022-08-25'),
(13, 'f', 'https://www.img.in.th/images/a80e8e2228eb73b7e8a78bc14da5c3d2.png', '2022-08-25');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` char(6) NOT NULL,
  `title` text NOT NULL,
  `detail` text NOT NULL,
  `thumbnail` text CHARACTER SET latin1 NOT NULL,
  `date` date NOT NULL,
  `tag` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `creat_by` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `detail`, `thumbnail`, `date`, `tag`, `category`, `creat_by`) VALUES
('04d7ab', 'RoV x Demon Slayer Kimetsu no Yaiba เมื่อทีมงานใจป๋าแจกสกิน Inosuke ให้ผู้เล่นแบบฟรี ๆ !!', 'RoV x Demon Slayer Kimetsu no Yaiba โปรเจกต์การคอลแลปสุดยิ่งใหญ่ของตัวเกม RoV และอนิเมะการ์ตูนดาบพิฆาตอสูร Demon Slayer Kimetsu no Yaiba รอบที่สอง ที่ตอนนี้ตัวกิจกรรมการร่วมมือสุดพิเศษนี้ก็ใกล้จะเข้าสู่ตัวเกมแล้วในช่วงสุดสัปดาห์นี้วันที่ 6 สิงหาคม โดยจะเป็นการเปิดตัวทั้งสองสกินอย่างสกิน Zenitsu (เซ็ตอิตสึ) และ Inosuke (อิโนะสุเกะ) ที่เป็นสกิน RoV ของ Murad และ Zephys\r\nแต่ที่เซอร์ไพรส์ไปกว่านั้นในโปรเจกต์การคอลแลป RoV x Demon Slayer Kimetsu no Yaiba นั้นทางทีมงาน RoV ได้มีการประกาศข่าวดีให้แฟน ๆ อนิเมะการ์ตูนดาบพิฆาตอสูร และ แฟนเกม RoV ได้ชื่นใจ เพราะพวกเขายืนยันอย่างชัดเจนว่าสกินสุด Exclusive ในการคอลแลปครั้งนี้จะมีการหยิบนำมาแจกฟรีให้กับผู้เล่นอีกด้วย โดยสกินที่จะนำมาแจกฟรีนั้นก็ได้แต่สกินดาบพิฆาตอสูร  Inosuke (อิโนะสุเกะ) ที่เป็นสกิน Zephys\r\n\r\nสำหรับสกิน Zephys x Inosuke Hashibira ในโปรเจกต์ RoV x Demon Slayer Kimetsu no Yaiba นั้นผู้เขียนเชื่อว่าหลาย ๆ คนคงได้บัตรทดลองสกินกันไปแล้ว เพราะเมื่อช่วงสัปดาห์ที่ผ่านมาทางทีมงานได้มีการแจกใบทดลองสกินดาบพิฆาตอสูร Inosuke (อิโนะสุเกะ) มาจากกิจกรรม ล็อคอินฉลองการร่วมมือครั้งที่ 2 กับ Demon Slayer Kimetsu no Yaiba\r\n\r\n ', 'https://cdngarenanow-a.akamaihd.net/webth/cdn/gth/rov/non-events/official/afc13ca1f95cf8aef05d4963bd56faa3941475276.jpg', '2022-08-19', 'ROV', 'Games', 'Pool'),
('1', 'Overwatch 2 จะถูกพัฒนากลายเป็นเกมฟรี Free-to-Play และเปิดให้เล่นพร้อมกัน 4 ตุลาคม', 'ตอนนี้ต้องยอมรับว่าตัวเกม Overwatch 2 กำลังมีกระแสตอบรับที่ดีมาก ๆ ไม่ว่าจะเป็นทั้งในต่างประเทศหรือแม้แต่ประเทศไทยบ้านเรา สำหรับกระแสเกม Overwatch 2 ในบ้านเราผลพวงส่วนใหญ่ก็มาจากการแข่งขัน Overwatch League 2022 รอบ Kickoff Clash ที่จบลงไปเมื่อต้นสัปดาห์ที่แล้ว เพราะทีม Los Angeles Gladiators ที่มีผู้เล่นชาวไทยชื่อดังอย่าง Patiphan สามารถคว้าแชมป์ Overwatch League 2022 รอบ Kickoff Clash โซนตะวันตกมาครอง\r\n\r\nจากการคว้าแชมป์ Overwatch League 2022 รอบ Kickoff Clash ครั้งนี้ของ Patiphan ทำให้สื่อเกมทั่วทั้งประเทศไทยต่างลงข่าวนี้กันแทบจะทุกสำนัก (เพราะเคสนี้ถือว่าเป็นอีกหนึ่งครั้งที่ผู้เล่นชาวไทยสามารถไปสร้างชื่อเสียงให้กับวงการอีสปอร์ตบนเวทีระดับโลก) ส่วนในมุมของคนเล่นเกมแน่นอนว่า Impact ครั้งนี้ของ Patiphan ย่อมส่งผลให้ผู้เล่นหลายต่อหลายคนเริ่มจับตามอง Overwatch 2 มากขึ้น (อ่านรายละเอียดเพิ่มเติม)\r\n\r\n<img src=\"https://img.4gamers.com.tw/ckfinder-th/image2/auto/2022-06/overwatch 2 เปิดวันไหน-220613-183943.jpg?versionId=b7Xk.AXUkwaAscJbeDBvVhtfDg9NxDhJ\">\r\n\r\nซึ่งถ้าพวกเขายังคงยึดติดกับแนวทางการตลาดแบบเดิมหลายคนคงเลิกสนใจตัวเกม Overwatch 2 กันพอสมควร (เพราะในไทยมีน้อยคนที่จะจ่ายเงินเพื่อที่จะมาเล่นเกมแนว Shooting กับเพื่อน) และดูเหมือนว่าสิ่งที่แฟนเกมแอบคิดจะเป็นจริงเพราะตอนนี้ได้ข่าวมียืนยันออกมาจากทาง Activision Blizzard ว่าตัวเกม Overwatch 2 จะเป็นเกมฟรี Free-to-Play โดยเป็นการประกาศจากในงาน Xbox & Bethesda Games Showcase พร้อมกับปล่อย Trailer Overwatch 2 ออกมาสู่สายตาแฟนเกมทั่วโลกพร้อมวันวางจำหน่าย\r\n\r\nโดย Overwatch 2 จะเปิดให้บริการอย่างเป็นทางการในวันที่ 4 ตุลาคมนี้ (โดยจะเปิดเฉพาะโหมด PvP) ก่อนและจะมีแผนที่ใหม่อย่างน้อยแสงแผนที่พร้อมโหมดใหม่ที่ทาง Blizzard ตั้งชื่อว่าโหมด Push และตัวเกมจะเดินหน้าเข้าสู่การแข่งขันแบบ 5v5 (ฝั่งละ 5 คน) เหมือนที่เราได้รับชมในการแข่งขัน Overwatch League 2022 ส่วนโหมด PVE การทำภารกิจของ Overwatch 2 นั้นจะตามมาในภายหลังเพราะทีมงานเผยว่ายังอยู่ในขั้นตอนการพัฒนา', 'https://i.ytimg.com/vi/dZl1yGUetjI/maxresdefault.jpg', '2022-08-19', 'Overwatch 2', 'Games', 'Pool'),
('39700e', 'PUBG: Ezqelusia สยบข่าวลือหลังออกจาก MiTH พร้อมยืนยัน \"แข่งต่อ\" แน่นอน', '<img src=\"https://thumbor.4gamers.com.tw/LFVmJDLyckxJ1EKpA02zYoIlilA=/800x0/filters:extract_cover():no_upscale():quality(80):format(jpeg):background_color(FFFFFF)/https%3A%2F%2Fimg.4gamers.com.tw%2Fckfinder-th%2Fimage2%2Fauto%2F2022-07%2F%E0%B8%81%E0%B8%A3%E0%B8%B5%E0%B8%99%20ezqelusia%20%E0%B8%A2%E0%B9%89%E0%B8%B2%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B8%A1%20%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B8%97%E0%B8%B5%E0%B8%A1%20mith-220729-184051.png%3FversionId%3DiA5AQI.VnWsIQXe2Myp_mEhwZcRglEMn\" />\r\n\r\nเมื่อวานนี้ได้มีข่าวใหญ่โตที่ทำเอาวงการอีสปอร์ตไทยบ้านเราต้องสั่นสะเทือนเกี่ยวกับตัวของเจ้าเขียวกรีน Ezqelusia ผู้เล่นที่เปรียบเหมือน Icon ของทีม MiTH.PUBG เพราะทางแฟนเพจ MiTH ได้ออกมาประกาศข่าวที่ทำเอาแฟนคลับทีม MiTH ช็อคกันถ้วนหน้าเพราะมันคือการประกาศว่าตอนนี้กรีน Ezqelusia ได้ออกจากทีม MiTH เรียบร้อยแล้ว \r\n<a href=\"https://www.4gamers.co.th/>อ่านข่าวย้อนหลัง</a>\r\n\r\nหลังจากที่ข่าวการออกจากทีม MiTH ของกรีน Ezqelusia เผยแพร่ออกไปเป็นวงกว้างเหล่าแฟนคลับของ MiTH.PUBG หรือคนในวงการอีสปอร์ตก็ต่างพากันเศร้าใจกันถ้วนหน้าเพราะการออกจากทีมครั้งนี้ของกรีน Ezqelusia เจ้าของวลี \"ความพยายามไม่เคยทำร้ายใคร\" ถือว่าเป็นการปิดตำนานทีม MiTH.PUBG ชุดที่เคยยิ่งใหญ่ที่สุดอย่างเป็นทางการ\r\n<img src=\"https://img.4gamers.com.tw/ckfinder-th/image2/auto/2022-07/mith ezqelusia-220729-182825.jpg?versionId=fAdi1SF68DaBgHC.Dqufv0YGP2GiM5jk\" />\r\n\r\nส่วนเหตุผลที่ทางกรีน Ezqelusia ออกจากทีมนั้นไม่ได้มีการเปิดเผยออกมาว่าทำไมตัวเขาและ MiTH ถึงต้องแยกทางกัน เพราะมีเพียงเนื้อหาที่ว่าขอบคุณตลอดระยะเวลาที่ผ่านมาเท่านั้น จึงทำให้เหล่าแฟนคลับต่างพากันตั้งคำถามกันมากมายแต่ที่เห็นว่ามากที่สุดคือเรื่องที่ว่า Ezqelusia หมดไฟกับการแข่งขัน หรือหมดยุคของเขาแล้วในการเป้นนักกีฬาอีสปอร์ตของเกม PUBG จึงได้ทำการแขวนเมาส์พร้อมออกจากทีม MiTH และหันไปเป็นสตรีมเมอร์แทนหรือเปล่า ?', 'https://cdn.oneesports.co.th/cdn-data/sites/3/2022/05/013C4010-2E9A-45C3-840D-DAE386DC5DD6.webp', '2022-08-19', 'PUBG', 'Games', 'Pool'),
('450860', 'Dead Island 2 ยาวนานกว่า 8 ปี !! หลุดข้อมูลตัวเกม พร้อมวันวางจำหน่ายอย่างเป็นทางการ วันที่ 3 กุมภาพํนธ์ 2023', 'ผ่านมาแล้วร่วมกว่า 8 ปี สำหรับเกมแฟรนไชส์ชื่อดังจากทาง Techland ทีมสร้างเกม Dead Island และ Dying Light ซึ่งถ้าย้อนกลับไปเมื่อปี 2014 ในงาน E3 พวกเค้าได้ออกมาประกาศปล่อย Trailer ให้กับเกม Dead Island 2 ให้รับชมกันอย่างเป็นทางการ ซึ่งสร้างเสียฮือฮาให้กับเหล่าแฟนเกมอยู่ไม่น้อยเลยทีเดียว\r\nแต่หลังจากปล่อย Trailer มานั้นเวลาก็ค่อย ๆ ล่วงเลยไปจาก 1 ปี เป็น 2 ปี จนตอนนี้ก็เข้าสู่ปีที่ 8 เป็นที่เรียบร้อย แต่ข่าวคราวของตัวเกมก็ไม่ได้มีการ Update หรือมีการประกาศอะไรแต่อย่างใดจากทางผู้พัฒนา ซึ่งแฟนเกมหลาย ๆ คนที่รอตามก็สอบถามถึงตัวเกม Dead Island 2 กันอย่างเต็มที่ แต่กลายเป็นว่าสิ่งที่ตอบกลับมาก็มีเพียงแค่เกมจากแฟรนไชส์ใหม่อย่าง Dying Light ซึ่งเป็นเกมที่ออกหลังจาก Dead Island ได้ไม่นาน แต่ตอนนี้ตัวเกมก็ได้ออกภาค 2 เป็นที่เรียบร้อยแล้ว\r\n\r\n ', 'https://assets2.rockpapershotgun.com/Dead-Island-2-2022-main-crop.jpg/BROK/resize/1760%3E/format/jpg/quality/80/Dead-Island-2-2022-main-crop.jpg 2x', '2022-08-20', 'Official', 'Official', 'Pool'),
('6b070f', 'VALORANT 4.09 ผู้เล่นเซงกันถ้วนหน้าหลัง Riot Games ตัดสินใจไม่เนิร์ฟ Fade ในแพทช์ใหม่ !!', 'ตอนนี้ทางค่ายกำหมัด Riot Games ได้อัปเดตแพทช์ใหม่ของตัวเกม VALORANT อย่าง VALORANT 4.09 เข้าสู่ตัวเกมเป็นที่เรียบร้อยแล้ว ในแพทช์ใหม่นี้ก็ได้มีสิ่งที่น่าสนใจมากมายหลาย ๆ อย่างเลยทีเดียว โดยเฉพาะการเนิร์ฟตัวละครเอเจนท์ตำแหน่ง Sentintels ที่ไม่ใช่ Sentinels อย่างพ่อหนุ่มสัญชาติฝรั่งเศษ Chamber รวมไปถึงยังมีการแก้ไขบัค VALORANT ต่าง ๆ อีกมากมายที่แอบแฝงอยู่ในตัวเกม <a href=\"https://www.4gamers.co.th/news/detail/7116\" target=\"_blank\">อ่านรายละเอียดเพิ่มเติม</a>\r\n<img alt=\"\" src=\"https://thumbor.4gamers.com.tw/kCB1tVRl_QTukjr0PodQYiN0-Hc=/800x0/filters:extract_cover():no_upscale():quality(80)/https%3A%2F%2Fimg.4gamers.com.tw%2Fckfinder-th%2Fimage2%2Fauto%2F2022-05%2Fvalorant%204.09-220511-162646.jpg%3FversionId%3DGIikqwx9KpOBITBqkl2YfUkyTcnM4YaY\" width=\"600\" data-puku-raw-src=\"https://img.4gamers.com.tw/ckfinder-th/image2/auto/2022-05/valorant 4.09-220511-162646.jpg?versionId=GIikqwx9KpOBITBqkl2YfUkyTcnM4YaY\">\r\n\r\nและหลังจากที่ทาง Riot Games ปล่อยรายละเอียดเกี่ยวกับสิ่งที่พวกเขาจะอัปเดตลงไปในแพทช์ใหม่ VALORANT 4.09 ออกมาก็ทำเอาสาวกผู้เล่น VALORANT บางกลุ่มรู้สึกไม่พอใจเป็นอย่างยิ่งเพราะตัวละคร VALORANT เอเจนท์ตัวใหม่ล่าสุดอย่าง Fade ไม่ได้มีการถูกเนิร์ฟหรือปรับสมดุลอะไรเลยแม้แต่นิดเดียว โดยสิ่งเดียวที่ปรับคือ VFX ที่จะทำให้สกิลของ Fade ดูสวยงามขึ้นเวลาที่เราเห็นสกิลของเธอในเกม\r\n\r\nสำหรับเหตุผลที่ผู้เล่น VALORANT หลายคนเรียกร้องให้เนิร์ฟ Fade เนื่องจากว่าความสามารถของเธอนั้นครบเครื่องเกินไปในฐานะ Initiator จากความสามารถสกิลทั้งหมดของเธอไม่ว่าจะเป็นการเปิดไซต์หาตำแหน่งศัตรู, ทำให้ศัตรูติดสถานะสตั้น, ล็อคขา, แจ้งตำแหน่งศัตรู, ทำให้ศัตรูตาบอด, มีสกิลที่สร้างความเสียหายได้รุนแรงหรือแม้กระทั่งทำให้อีกฝ่ายหูหนวกจากสกิลอัลติเมท (จะเยอะไปไหน)', 'https://www.riotgames.com/darkroom/2880/c6daec14635c52894ad2c81793749da4:421dad84fe0c6bea23d0e52054de8a19/00-header-alt.jpg', '2022-08-19', 'Valorant', 'Games', 'Pool'),
('75134a', 'VALORANT ทาง Riot Games ยืนยัน \"ระบบแบนเอเจนต์และแผนที่\" ในอนาคตได้เจอกันแน่', 'อนาคตของตัวเกม VALORANT ดูเหมือนว่าจะยังเดินหน้าพัฒนาไปต่อได้อีกยาวไกลครับ เพราะทาง Dev ของ Riot Games ที่รับผิดชอบดูแลพัฒนาตัวเกม FPS แนวแฟนตาซี ได้ออกมาปล่อยคลิปที่เป็นการตอบคำถามสำคัญมากมายที่แฟนเกมได้ส่งตรงมาถึงพวกเขา โดยในหนึ่งในคำตอบที่น่าสนใจก็คงเป็นเกี่ยวกับเรื่องระบบ \"แบนเอเจนต์และแผนที่\" <img src=\"https://thumbor.4gamers.com.tw/yc08lQ1rg5FyrixcDzsH6hqvpzk=/800x0/filters:extract_cover():no_upscale():quality(80)/https%3A%2F%2Fimg.4gamers.com.tw%2Fckfinder-th%2Fimage2%2Fauto%2F2022-08%2Fvalorant%20%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%205.03-220818-135411.jpg%3FversionId%3DtKuLo7x0scLiL2w5xDc3yMHN_Xu50kz_\">\r\n\r\nทางค่ายกำหมัดยืนยันอย่างชัดเจนว่าในอนาคตพวกเขาจะนำระบบแบนเอเจนต์และแผนที่เข้าสู่ตัวเกม VALORANT แน่นอน แต่จะนำเข้ามาใช้แค่ในการแข่งขันผ่านระบบ Tournament Mode ก่อนเท่านั้น ส่วนในการเล่นแบบโหมดปกติหรือโหมดแรงค์จะยังไม่มีการนำระบบนี้เข้ามาสู่ตัวเกมในเร็ว ๆ นี้เป็นแน่ เพราะมันอาจจะเกินเหตุการณ์ที่ทำให้ผู้เล่นที่ถนัดเล่นเอเจนต์ตัวเดียวเกิดปัญหารวนและเล่นไม่ออกจนสุดท้ายต้องเลิกเล่นไปเลยก็ได้\r\n\r\n<img src=\"https://img.4gamers.com.tw/ckfinder-th/image2/auto/2022-08/valorant ตัวละคร-220818-135423.webp?versionId=sDCyfPBXVW6KkIMqSyrFIkt8MJbfjxB4\">\r\n\r\nระบบแบนเอเจนต์และแผนที่นั้นคาดว่า Riot Games คงจะหยิบนำมันมาใช้อย่างเป็นทางการในปี 2023 ปีหน้านี้ ที่จะเป็นปีแห่งอีสปอร์ตของเกม VALORANT อย่างแท้จริง เพราะจะเป็นปีแรกที่พวกเขาจะนำระบบแฟรนไชส์ลีกเข้ามาใช้แข่งขันและคัดเลือกเพือเฟ้นหาแต่ทีมระดับโลกมารวมตัวกันและแข่งขันกันในระบบลีกแบบแบ่งภูมิภาค\r\n ', 'https://thumbor.4gamers.com.tw/yc08lQ1rg5FyrixcDzsH6hqvpzk=/800x0/filters:extract_cover():no_upscale():quality(80)/https%3A%2F%2Fimg.4gamers.com.tw%2Fckfinder-th%2Fimage2%2Fauto%2F2022-08%2Fvalorant%20%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%205.03-220818-135411.jpg%3FversionId%3DtKuLo7x0scLiL2w5xDc3yMHN_Xu50kz_', '2022-08-19', 'Valorant', 'Games', 'Pool'),
('870ed5', 'PUBG ไปแบบงง ๆ Purple mood E-Sport ปล่อยผู้เล่นทั้ง 4 แบบยกชุด พร้อมประกาศนำ ThanawatTH เตรียมนำทัพให้กับผู้เล่นชุดใหม่', 'หลังจากเมื่อไม่กี่วันที่ผ่านมาทางเราได้นำเสนอบทความเกี่ยวกับสังกัด Purple mood E-Sport ที่ประกาศเปิดตัวผู้เล่นคนใหม่อย่าง ThanawatTH และแฟนคลับหลาย ๆ คนต่างก็เฝ้ารอว่าการมาของ ThanawatTH จะยกระดับให้กับ Purple mood E-Sport ได้แบบสุด ๆ ซึ่งเพื่อน ๆ สามารถเข้าไปอ่านเพิ่มเติมได้ที่บทความนี้\r\n\r\nแต่เนื่องด้วยข้อกำหนดหลาย ๆ อย่าง และการมาของ ThanawatTH ก็เป็นอะไรที่ฉุกละหุก ทำให้เจ้าตัวไม่สามารถเข้าร่วมการแข่งัขนในปัจจุบันได้ และทำให้ Purple mood E-Sport ต้องใช้ชุดเดิมแข่งขันต่อไปอย่างช่วยไม่ได้\r\n\r\nแต่ก็ดันเจอเรื่องไม่คาดฝันขึ้นจนได้ เมื่อทาง Purple mood E-Sport ได้ประกาศให้ผู้เล่นทั้ง 4 คน เข้าสู่สถานะ Free Agent แบบงง เล่นเอาเหล่าแฟนคลับแกะม่วงที่มาพบเห็นต่างพากันมึนงง และสงสัยเกี่ยวกับเหตุการณ์ในครั้งนี้แบบสุด ๆ ซึ่งภายใน Comment ก็ได้มีแฟนคลับจำนวนมากเข้ามาโถมใส่อย่างดุเดือด พร้อมแสดงความคิดเห็นของตัวเองจนเหมือนกับเป็นเจ้าของทีมยังไงยังงั้น\r\n\r\n<ul>	<li><strong>YoshiMinburi</strong></li>	<li><strong>2Crazy</strong></li>	<li><strong>JKRz</strong></li>	<li><strong>Jameszanaruk</strong></li></ul>', 'https://cdn.oneesports.co.th/cdn-data/wp-content/uploads/sites/3/2021/01/556CF248-CABF-40A6-BD99-18861A46E44D.jpeg', '2022-08-19', 'PUBG', 'Games', 'Pool'),
('98e927', '\'แฟน ๆ เตรียมเฮ!\' ในที่สุด Guild Wars 2 ก็ประกาศวันวางจำหน่ายบน Steam แล้ว', 'เกม <b/>MMORPG<b/> ชื่อดังอย่าง <strong>Guild Wars 2</strong> ของ<strong> ArenaNet</strong> ที่เปิดตัวในปี 2012 ยังคงมีผู้เล่นหลายล้านคนที่เล่นเกมนี้อย่างต่อเนื่อง โดยนักพัฒนารายงานว่ามีผู้ใช้ที่ลงทะเบียนมากกว่า 16 ล้านคนภายในปี 2021 ซึ่งเกมดังกล่าวยังมี <strong>DLC</strong> หลัก 3 ส่วนและเนื้อหาย่อยอีกหลายรายการตั้งแต่เปิดให้เล่นฟรี ในปี 2015 และยังมีรายงานว่า DLC ตัวที่ 4 กำลังอยู่ในการพัฒนา อย่างไรก็ตามสิ่งหนึ่งที่ <b/>Guild Wars 2<b/> ไม่มีก็คือการวางจำหน่ายบน Steam\r\n\r\n<img src=\"https://img.4gamers.com.tw/ckfinder-th/image2/auto/2022-08/Guild_Wars_2_key_art-220818-172909.webp?versionId=QLZbceKMtI4IGCgUHJSlz16BcGo0.rjt\">\r\n\r\nสิ่งนี้กำลังจะเปลี่ยนไปล่าสุด ArenaNet ประกาศเปิดตัว Steam ของ Guild Wars 2 ใน Trailer ใหม่ในวันอังคารที่ผ่านมา ซึ่งผู้เล่นสามารถเข้าสู่เกมแฟนตาซีในและสำรวจโลก Tyria ผ่าน Steam ได้ในวันที่ 23 สิงหาคม ก่อนวันครบรอบ 10 ปีของ Guild Wars 2 ในวันที่ 28 สิงหาคมเพียงไม่กี่วัน\r\n\r\n<img src=\"https://img.4gamers.com.tw/ckfinder-th/image2/auto/2022-08/Guild Wars 1-220818-172917.jpg?versionId=iBGmQlkHLB7jci0._0TcBhpVt5agDNyj\">\r\n\r\nซึ่งมันรวมถึงขีดจำกัดระดับเลเวลที่ค่อนข้างต่ำของเกมที่เลเวล 80 ด้านนักพัฒนาเชื่อว่าป้องกันการทำงานอย่างหนักในช่วง Late-game ในขณะที่ยังคงให้เวลาผู้เล่นสร้างตัวละครของพวกเขา นอกจากนี้ Guild Wars 2 ยังจำกัดผู้เล่นให้มีสกิลเพียง 10 สกิลเท่านั้น สิ่งนี้กระตุ้นให้ผู้เล่นคิดอย่างมีกลยุทธ์เมื่อสร้างตัวละครในขณะที่ปรับปรุงความสมดุลของเกม ซึ่งผู้พัฒนา ArenaNet อ้างว่าเป็นปัญหาสำคัญกับ MMO จำนวนมาก\r\n\r\n \r\n\r\nGuild Wars 2 ยังเพิ่มระดับผู้เล่นขึ้นและลงตามความจำเป็นเพื่อให้เกมมีความท้าทายและป้องกันไม่ให้ผู้เล่นระดับสูงได้เปรียบอย่างไม่เป็นธรรมใน PVP สิ่งนี้ยังช่วยให้เกมที่มีผู้เล่นหลายคนที่เล่นมายาวนานเป็นมิตรกับผู้เล่นใหม่', 'https://guildwars2.staticwars.com/wp-content/themes/guildwars2.com-live/img/og-img.f6214476.jpg', '2022-08-19', 'Official', 'Official', 'Pool'),
('999219', 'VALORANT Champions 2022 ทีม XERXIA เตรียมเจอโจทก์เก่า FunPlus Phoenix ในการแข่งขันชิงแชมป์โลก', 'VALORANT Champions 2022 การแข่งขันขิงแชมป์โลกสุดยิ่งใหญ่ของตัวเกม VALORANT ประจำปี 2022 ที่จะจัดแข่งขันที่แดนไก่งวงเมืองอิสตันบูล ประเทศตุรกี ในวันที่ 31 สิงหาคม สิ้นเดือนนี้ และจะแข่งขันกันเป็นะระเวลากว่าเดือนครึ่ง เพราะรอบชิงชนะเลิศ Grand Final ของ VALORANT Champions 2022 จะแข่งขันกันในวันที่ 18 กันยายน \r\n\r\n รายการ VALORANT Champions 2022 นั้นในปีนี้ก็อย่างที่ทุกคนทราบกันว่าทีมตัวแทนจากประเทศไทยเราก็จะได้เข้าร่วมในการแข่งขันนี้เช่นเดียวกันเหมือนกับปีที่แล้ว โดยทีมไทยที่ได้ตบเท้าเข้าร่วมในการแข่งขันนี้ก็ไม่ใช่ทีมอื่นใดเพราะพวกเขาคือทีม VALORANT อันดับหนึ่งในประเทศไทยและเป็นเบอร์ต้น ๆ ของโซน APAC อย่างทีมวัยรุ่นชมพูดำ XERXIA\r\n<img src=\"https://thumbor.4gamers.com.tw/U_L2lOpBjjNZJ2m1yTsbpJimOPk=/800x0/filters:extract_cover():no_upscale():quality(80)/https%3A%2F%2Fimg.4gamers.com.tw%2Fckfinder-th%2Fimage2%2Fauto%2F2022-08%2Fvalorant%20%E0%B8%97%E0%B8%B5%E0%B8%A1%20xerxia-220818-143534.jpg%3FversionId%3DUYGNvwJGjVbakmx6jlKJmmSeHqkLTorI\">\r\nโดย XERXIA พวกเขาได้เข้าสู่การแข่งขัน VALORANT Champions 2022 ในฐานะทีมอันดับที่สองจากโซน APAC ที่มีแต้มคะแนน Circuit Points สูงที่สุด โดยคะแนนเป็นรองเพียงแค่ทีมเดียวคือ Paper Rex ทีมฉายาเทพสงครามจากประเทศอินโดนีเซียที่มีผู้เล่นดาวเด่นอย่าง 2 คู่หู W ค้าง f0rsakeN และ Jinggg นำทัพ\r\n\r\n<img src=\"https://img.4gamers.com.tw/ckfinder-th/image2/auto/2022-08/valorant champions 2022 xerxia-220818-143335.jpg?versionId=VdEzhXBPeS8koSV4Q9zFhlh0bQnaLuAU\">\r\n\r\nและล่าสุดตอนนี้ตารางการแข่งขัน VALORANT Champions 2022 รอบแบ่งกลุ่ม Group Stage ก็ได้ถูกปล่อยออกมาให้แฟนเกมและแฟนคลับของแต่ละทีมได้รับรู้กันแล้วว่าชะตาของทีมที่พวกเขาชื่นชอบในรอบแบ่งกลุ่มจะต้องไปเจอกับใคร โดย XERXIA นั้นต้องบอกเลยว่านี้เป็นงานหนักสำหรับพวกเขาพอสวรเลยครับ เพราะ XERXIA ต้องเจอกับยอดทีมจากโซน NA อย่าง XSET ในการแข่งขันแมตซ์แรก\r\nแต่ที่น่าสนใจเลยก็คือถ้าหาก XERXIA สามารถเอาชนะ XSET ไปได้ละก็ ในรอบต่อไปพวกเขาก็มีโอกาสค่อนข้างสูงที่จะไปล้างตากับทีมนกอมตะ FunPlus Phoenix หรือ FPX อีกครั้ง หลังจากเคยพลาดท่าแพ้ให้กับทีมแชมป์ VALORANT Masters Copenhagen 2022 ไปในรอบ Group Stage ที่ประเทศเดนมาร์ก ', 'https://thumbor.4gamers.com.tw/gQZCPRJGcy3nw-CuIFfT7K8HZZM=/800x0/filters:extract_cover():no_upscale():quality(80):format(jpeg):background_color(FFFFFF)/https%3A%2F%2Fimg.4gamers.com.tw%2Fckfinder-th%2Ffiles%2FValorant-Champions-2022-Ten-Participating-Teams-01.png%3FversionId%3DS1wJTdoQ_elILD7uHseA0MzJcw.8iW_6', '2022-08-19', 'Valorant', 'Games', 'Pool');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` int(11) NOT NULL,
  `teams_title` text NOT NULL,
  `teams_image_url` text CHARACTER SET latin1 NOT NULL,
  `link` text NOT NULL,
  `teams_alt` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `teams_title`, `teams_image_url`, `link`, `teams_alt`) VALUES
(1, 'Official Staff', 'https://www.img.in.th/images/a8c789fa0175f0c11f18ef36995593d7.png', 'https://www.img.in.th/images/a8c789fa0175f0c11f18ef36995593d7.png', 'official-staff'),
(3, 'Streamer', 'https://www.img.in.th/images/aed1ff637e0cd505371540976d94996e.png', 'https://www.img.in.th/images/aed1ff637e0cd505371540976d94996e.png', 'streamer'),
(5, 'Valorant', 'https://www.img.in.th/images/900cc6e9598af7831fc02d42821b5f09.png', 'https://www.img.in.th/images/900cc6e9598af7831fc02d42821b5f09.png', 'valorant'),
(7, 'PUBG', 'https://www.img.in.th/images/8a01680f6679eb8820cd22218ad469ca.png', 'https://www.img.in.th/images/8a01680f6679eb8820cd22218ad469ca.png', 'pubg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(20) CHARACTER SET latin1 NOT NULL,
  `password` varchar(255) CHARACTER SET latin1 NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` mediumblob NOT NULL,
  `permission` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` int(11) NOT NULL,
  `video_link` text CHARACTER SET latin1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id`, `video_link`) VALUES
(1, 'FMNSUcIa8Ig'),
(3, '3T1INAV-am0'),
(4, 'Y4eO65zmwlE'),
(7, 'PfjiZEK6zQk'),
(8, 'w2gtRXU6GQQ'),
(11, '7FYwGIo6KTM'),
(12, 'DRRpH9cf6Co'),
(13, 'whcKtzq2gmk');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
