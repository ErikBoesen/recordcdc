function PageLocationInHierarchy(){this.azEntry=new String,this.channel=new String,this.level=new Array(6),this.setAzEntry=function(entryText){this.azEntry=entryText},this.setChannel=function(channel_str){this.channel=channel_str},this.setLevel=function(lvl,lvl_str){5<lvl||lvl<0||void 0===this.level[lvl]&&(this.level[lvl]=lvl_str)},this.setLevel1=function(level_1){this.setLevel(0,level_1)},this.setLevel2=function(level_2){this.setLevel(1,level_2)},this.setLevel3=function(level_3){this.setLevel(2,level_3)},this.setLevel4=function(level_4){this.setLevel(3,level_4)},this.setLevel5=function(level_5){this.setLevel(4,level_5)},this.setLevel6=function(level_6){this.setLevel(5,level_6)},this.isLevel=function(lvl){return!(lvl<0||5<lvl)&&(0<=lvl?"string"==typeof this.level[lvl]:void 0)},this.getAzEntry=function(){return this.azEntry},this.getChannel=function(){return this.channel},this.getLevel=function(lvl){if(this.isLevel(lvl))return this.level[lvl]},this.getHierarchy=function(){var gap;for(gap=!1,0,this.siteCatalyst=this.getLevel(0),i=1;i<this.level.length;i++)if(this.isLevel(i))this.siteCatalyst+="~"+this.getLevel(i);else{for(gap=!1,j=i+1;j<this.level.length;j++)this.isLevel(j)&&(gap=!0);gap&&(this.siteCatalyst+="~")}return this.siteCatalyst}}function updateVariables(s){s.hier1=siteCatalyst.getHierarchy();var chan=siteCatalyst.getChannel();chan&&0<chan.length&&(s.channel=siteCatalyst.getChannel());var az=siteCatalyst.getAzEntry();az&&0<az.length&&(s.prop45=az),s.prop22=siteCatalyst.getLevel(0),s.prop23=siteCatalyst.getLevel(1),s.prop24=siteCatalyst.getLevel(2),s.prop25=siteCatalyst.getLevel(3),s.prop43=siteCatalyst.getLevel(4),s.prop44=siteCatalyst.getLevel(5)}function showDebugInfo(arg){}var siteCatalyst=new PageLocationInHierarchy,verbose=!1;