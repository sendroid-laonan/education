//<![CDATA[

jQuery.validator.addMethod("checkFileSize",
    function (value,element,param) {
        var flag = true;
        //输入框个数
        var inputList = $('#edit_file').find('.fileinput');
        var inputNum = inputList.length;

        for (var i = 0;i<inputNum;i++){
            var input =  inputList[i];
            if (input.value==""||input==null){
                continue;
            }
            var maxSize = param;
            if(input.size > maxSize){
                flag = false;
            }
        }
        return flag;

    },"文件大小不得大于5M");


jQuery.validator.addMethod("checkFileType",
    function (value,element,param) {
        var flag = true;
        //输入框个数
        var inputList = $('#edit_file').find('.fileinput');
        var inputNum = inputList.length;

        for (var i = 0;i<inputNum;i++){
            var input =  inputList[i];
            if (input.value==""||input==null){
                continue;
            }

            var fileName = input.value;
            var suffix = fileName.split(".")[1];

            if (fileName !== "") {
                if (param.split(",")[0] != suffix && param.split(",")[1]!= suffix) {
                    flag = false;
                }
            }
        }
        return flag;

    },"文件格式不对，请选择xls或xlsx格式！");
//]]>
var validaterSetting = {
    rules:{
            //名字要与file的name一样
            files:{
                "checkFileSize":30*1024*1024,
                "checkFileType":"xls,xlsx",
                required:true,
            }
        },
    errorPlacement: function (error,element) {
        element.parent().append(error);
    }
}

$(function () {
    var $valid = $("#form").validate(validaterSetting);
    if(!$valid){
        $validator.focusInvalid();
        return false;
    }
})