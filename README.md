# otterdb

### colloection

create new colloection
```
const res = await otterdb.createColloection('colloection_name');
```

delete colloection
```
const res = await otterdb.deleteColloection('colloection_name');
```

show colloections
```
const res = await otterdb.showColloctions();
```

### CURD

create 
```
const res = await otterdb.push('colloection_name',{
    name:'Atanu',
    age:20,
});
```

### Update

Update by key and value 
```
const res = await otterdb.update('colloection_name',{
    name:'Atanu'
});
```

Update by _id
```
const res = await otterdb.updateById('colloection_name',"12135659");
```


### Find

Find All
```
const res = await otterdb.findAll('colloection_name');
```

Find by key and value 
```
const res = await otterdb.find('colloection_name',{
    name:'Atanu'
});
```

Find by _id
```
const res = await otterdb.findById('colloection_name',"12135659");
```

### Delete

Delete by key and value 
```
const res = await otterdb.pop('colloection_name',{
    name:'Atanu'
});
```

Delete by _id
```
const res = await otterdb.popById('colloection_name',"12135659");
```
