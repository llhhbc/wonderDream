

#### open mariadb utf8mb4

```shell
mysql
>  SHOW VARIABLES WHERE Variable_name LIKE 'character\_set\_%' OR Variable_name LIKE 'collation%';

mysql --help |head   #中可以看到mysql读取的配置文件

#添加如下配置：
[server]
log-bin=mariadb-bin

[mysqld]
character_set_server=utf8mb4
collation-server=utf8mb4_unicode_ci
init_connect='SET NAMES utf8mb4'
skip-character-set-client-handshake=true


#重启mariadb

## 如果要修改存量数据库编码：ALTER DATABASE XX_db CHARACTER SET utf8mb4;


```


#### mysql
1. create database
> CREATE database dreammap default character set utf8mb4 default collate utf8mb4_general_ci;

1. create table

```sql
-- users
create table users (
	id int AUTO_INCREMENT,
	userId varchar(30),
	userName varchar(200),
	userEmail varchar(100),
	userPhone varchar(20),
	primary key(id)
) ENGINE = InnoDB;
CREATE UNIQUE INDEX uidx_users_name
ON
   `users`
    (
        userName
    );
-- articles
CREATE TABLE
    articles
    (
        id INT AUTO_INCREMENT,
        esId varchar(30),
        userId varchar(30),
        title varchar(255),
        openFlag char(5),
        datetime TIMESTAMP,
        primary key(id)
    )ENGINE=InnoDB;

CREATE UNIQUE INDEX uidx_articles_title
ON
   articles
    (
        title
    );

CREATE TABLE
    article_tags
    (
        id INT,
        tag varchar(50),
        primary key(id, tag)
    )ENGINE=InnoDB;

CREATE TABLE
    article_categories
    (
        id INT,
        categories varchar(50),
        primary key(id, categories)
    )ENGINE=InnoDB;
```

#### es map

1. create es index

```shell
curl -XPUT 'localhost:9200/wonderbook?pretty' -H 'Content-type:application/json' -d '
{
"mappings": {
	"articles": {
		"properties": {
			"title": {"type" : "text", "analyzer": "ik_max_word", "search_analyzer": "ik_max_word"},
			"description": {"type" : "text", "analyzer": "ik_max_word", "search_analyzer": "ik_max_word"},
			"date": {"type" : "date"},
			"context": {"type" : "text", "analyzer": "ik_max_word", "search_analyzer": "ik_max_word"}
			}
		}
	}
}'

```

## 系统结构
前端：    ng 
中间件：  goapi 
数据库：    es  mysql

ng负责前端的展示
goapi封装微服务api：
	1. 用户管理
	2. 文章管理
	3. 搜索管理
	4. 思维图管理
	5. httphead中间件：
		1. 用户名（未登录为访客用户）
		2. session
		3. csrf

### 前端结构
以ng本身的结构为基础
1. 组件负责数据绑定与展示， 服务负责与后台交互
2. 每个go服务对应一个ng服务


### go服务
以grafana总线结构为参考

##### 以后的展望
1. 将总线用grpc来剥离，

## 系统实现
### ng前端

```shell
ng new wonder-dream

```

### go服务
1. 服务结构
  1.1 head中间件
  1.1.1 user设置
  1.1.2 traceId设置

  1.2 服务处理
  1.2.1 服务调度
  1.2.2 






