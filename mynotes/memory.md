
## create memory app for learning

## 1. create component

```shell
ng generate component memory

cd src/app/memory
ng generate component wordlink

cd wordlink
ng generate service wordlink

```

## 2. 功能说明

>单词的联想和想像：

* 从单词库中随机取出多组单词，根据单词生成对应的卡片（卡片开始是盖着的），点击卡片可以打开，当点击出来后，会出现一个输入框，输入两个卡片连接所进行的想像
* 当所有卡片都打开后，全部再盖上，随机打乱卡片的顺序（组的顺序保持不变，之前已经连接的卡片保持左右顺序）
* 点击左边、或者右边的一个卡片，让用户联想对应的连接卡片信息，并在输入框中输入，如果输入错误，则先显示之前输入的连接信息，再输入，还是错误再显示对应的答案
* 联想错误的卡片信息会记录下来，并提示用户更新连接信息

## 3. 系统设计

* 1.数据库表设计

  表有如下：
  1. 单词表
    单词id，单词值，单词分类
  2. 单词联系表
    单词id列表（逗号分隔），单词联系说明，联系强度（第一次建立关系为100）

* 2. go做后台服务，完成单词返回
* 3. ng做功能显示

## 4. 功能实现

* 1. 表创建

```sql
create table wl_words (
  word_id int AUTO_INCREMENT,
  word_name varchar(255),
  word_type varchar(10),
  primary key(word_id)
) ENGINE = InnoDB;

create table wl_link (
  id_list varchar(255),
  link_desc varchar(500),
  link_level int,
  primary key (id_list)
)ENGINE = InnoDB;


```

* 2. go实现
看过python元编程后，我喜欢上了元编程，它灵活，而且扩展方便
python的元编程，其实就用定义了一条足够灵活的轨道，在这个轨道上，分别定义好了一些结点，比如__init__,__get__ 等，当元件实现了这些方法，或者挂载了这些方法（就好比一个手拿了个工具），然后就有了相应的功能。
微服务，讲究的是服务化，功能最小化，每个元件都完成一个小功能，然后他们组合起来，就是一个大工程


## 5. 功能开发



