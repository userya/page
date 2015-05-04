require(["./src/Factory", "./lib/mmPromise"], function (factory) {
    var allclass = factory.getAll();
    console.log(allclass);
    var inp = factory.create("input", {

        $parentId: 'inputContainer',
        value: '',
        required: false,
        glyphicon: 'glyphicon-ok',
        message: '请输入用户名',
        label: '用户名',
        hasError:false,
        $id: 'username'//,

        //value: 'init'
    });
    inp.render();
    console.log(inp);

    var combo = factory.create('combobox',{
        $parentId:'comboboxContainer',
        $id:'sex',
        label:'性别'
    })
    combo.render();
    window['JOT'] = factory;
});