 <?php
    
  class Curls {
     public $RAIZ = "http://localhost/GlobalMaxService/index.php?route=";
     public function curl($url){
            $ch = curl_init($this->RAIZ.$url);  
            curl_exec($ch);  
            curl_close($ch);     
     }
 } 
?>
