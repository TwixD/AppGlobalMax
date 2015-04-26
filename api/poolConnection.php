 <?php
 require_once 'curls.php';
 $curl = new curls();
switch ($_GET['route']):
    case 'validate_user':
        $curl->curl("service_validateuser&user=".$_GET['user']."&password=".$_GET['password']);  
        break;
    case 'service_getmenu':
         $curl->curl("service_getmenu");  
        break;
    default:
        echo '{"message":[{"recommend":"Ruta Corrupta","msg":"'.$_GET['route'].'"}],"success":false}';
endswitch;
?>
