<?php
$arr=array("php","opensource","ITI","day2","array");
for($i=0;$i<count($arr);$i++){
    echo $arr[$i]."<br>";
}
while($i<count($arr)){
    echo $arr[$i]."<br>";
    $i++;
}

$info=array("name"=>"Abdallah","age"=>25,"email"=>"abdallah@example.com","college"=>"NUB");
foreach($info as $key=>$value){
    print_r("$key: $value <br>");
}
echo"=============================<br>";
sort($arr);
echo "Sorted array: <br>";
foreach($arr as $value){
    print_r("$value <br>");
}
echo"=============================<br>";
rsort($arr);
echo "Reverse sorted array: <br>";
foreach($arr as $value){
    echo "$value <br>";
}
echo"=============================<br>";
asort($info);
echo "Sorted associative array: <br>";
foreach($info as $key=>$value){
    echo "$key: $value <br>";
}
echo"=============================<br>";
echo "Keys of info array: <br>";
$keys = array_keys($info);
foreach($keys as $key){
    echo "$key <br>";
}
?>