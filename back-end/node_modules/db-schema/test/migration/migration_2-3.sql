ALTER TABLE `user` ADD COLUMN `parent_id` int(11) NULL DEFAULT NULL;
ALTER TABLE `user` ADD INDEX (`parent_id`);