$(document).ready(function() {
    $(function(){
        $("#phone").mask("8(999) 999-9999");
      });

      $('.fio').on('input', function(){
        this.value = this.value.replace(/[^a-zа-яё\s]/gi, '');
      });
});