document.querySelector('Form').addEventListener('submit', function (event) {
    var query = document.getElementById('query').value;
    // 在这里编写查询逻辑并将结果显示在 #result 元素中
    document.getElementById('result').innerHTML = '你输入的查询是：' + query;
    event.preventDefault();
});