﻿<%@ Import Namespace="JoymonOnline" %>

<%@ Page Language="C#" MasterPageFile="~/site.master" Title="Joymon Online | Home" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="JoymonOnline.Default" %>

<%@ OutputCache CacheProfile="Cache30Seconds" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Main" runat="server">
    <script src="Scripts/angular.js" type="text/javascript"></script>
    <script src="Scripts/angular-sanitize.js" type="text/javascript"></script>

    <script src="JS/app/app.js" type="text/javascript"></script>
    <script src="JS/app/content.component.js" type="text/javascript"></script>
    <script src="JS/app/content.service.js" type="text/javascript"></script>

    <div class="shim column"></div>

    <div ng-app="JoymonOnline" class="page" id="home">
        <div id="sidebar">
            <h4>Contact me</h4>
            <a href="mailto:joymon@gmail.com">joymon@gmail.com</a><br />
            Mob : +1 661-750-9787,NO1-NOJOY-16
            <div id="coollinks">
                <h4>Cool Links</h4>
                <ul class="link">
                    <li><a href="http://www.joyfulwpf.blogspot.com" target="_blank">My WPF blog</a></li>
                    <li><a href="http://www.joymonscode.blogspot.com" target="_blank">Joymon v/s Code</a></li>
                </ul>
            </div>
        </div>
        <div id="content">
            <h3>Welcome	to JoymonOnline</h3>
            <p>Hi I am Joy. Here you can find details to know me more. It includes my personal details, education details and professional details.	</p>
            <hr />
            <div id="whatsnew">
                <h4>What's New</h4>
                <content source="WhatsNew"></content>
            </div>

            <hr />
            <h4>Who Am I ?? </h4>
            <content source="WhoAmI"></content>
        </div>
    </div>

</asp:Content>
