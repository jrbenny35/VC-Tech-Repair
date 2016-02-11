# Models
This folder contains the database models used for MongoDB.
It also contains an index file used for referencing a specific model outside of this folder.

## Folder Contents

* A file with a [name]Model structure should be used to denote a mongoose model.
* An easy to remember name should then be added to the index file. This file is used to keep track of the models.
* You must require this folder to be able to access this file. The folder structure may vary.
    ```sh
   var models = require(../../models/index);
    ```
* When accessing a model from within node, or express, you should use the structure that follows...
     ```sh
    models.nameOfModel();
    ```
    Example:
    ```sh
   models.repair();
    ```
