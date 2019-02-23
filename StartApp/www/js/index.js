/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    state :0,

    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        var button=document.getElementById("main_btn");
        button.addEventListener("click",this.buttonClicked.bind(this),false);
    },

    buttonClicked : function (){
        var toHide = null;
        var toSHow = null;
        if (this.state%2==0){
            toHide = document.getElementById("main_text");
            toShow = document.getElementById("secondary_text");
        }
        else{
            toHide = document.getElementById("secondary_text");
            toShow = document.getElementById("main_text");
        }
        toHide.setAttribute('style', 'display:none;');//.style.visibility='none';
        toShow.setAttribute('style', 'display:block;');//.style.visibility='block';
        this.state+=1;
    }
};

app.initialize();