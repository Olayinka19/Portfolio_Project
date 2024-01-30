CREATE TABLE IF NOT EXISTS `user_companies` (`user_id` int(11) NOT NULL,`company_id` int(11) NOT NULL, PRIMARY KEY (`user_id`,`company_id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;
DROP TABLE IF EXISTS `accesstoken`;
CREATE TABLE IF NOT EXISTS `company` (`id` int(11) NOT NULL AUTO_INCREMENT,PRIMARY KEY (`id`),`name` varchar(255) NULL DEFAULT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8;