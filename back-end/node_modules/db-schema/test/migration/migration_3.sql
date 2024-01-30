ALTER TABLE `user` DROP COLUMN `age`;
ALTER TABLE `user` ADD COLUMN `birthdate` datetime NULL DEFAULT NULL;
ALTER TABLE `user` CHANGE `_name` `name` varchar(255) NULL DEFAULT NULL;
CREATE TABLE IF NOT EXISTS `accesstoken` (`id` int(11) NOT NULL AUTO_INCREMENT,PRIMARY KEY (`id`),`token` varchar(255) NULL DEFAULT NULL,`user_id` int(11) NULL DEFAULT NULL,KEY `user_id` (`user_id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8;
ALTER TABLE `user` ADD COLUMN `parent_id` int(11) NULL DEFAULT NULL;
ALTER TABLE `user` ADD INDEX (`parent_id`);