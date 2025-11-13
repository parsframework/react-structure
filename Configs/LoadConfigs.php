<?php
namespace ParsFramework\Configs;
use ParsFramework\Includes as I;





if(!class_exists('LoadConfigs')){
final class LoadConfigs{




static function run(){
$isPluginUrls=I\Os\Url::isPluginUrls();

Variable\Variable::run();

if($isPluginUrls){
Asset\StyleScript::run();
}

AdminPage\AdminPage::run();

/* Main\Main::run(); */

}





}}

/* if(\current_user_can('administrator') || \current_user_can('editor') || \current_user_can('author')){}
if(str_contains(parsframeworkCurrentUrl,'admin.php?page='.parsframeworkPrefixPlugin)){}
*/

