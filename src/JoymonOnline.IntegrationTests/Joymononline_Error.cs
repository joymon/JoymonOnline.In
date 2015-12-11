﻿using System;
using FakeHost;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace JoymonOnline.IntegrationTests
{
    [TestClass]
    public class Joymononline_Error :IntegrationTest
    {
        [TestMethod]
        public void WhenPageIsNotValid_RedirectToErrorPage()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/PageNotExists.aspx");
                Assert.IsTrue(result.ResponseText.Contains("Joymon Online | Error"), "Error page is wrong");
            }
        }
        [TestMethod]
        public void WhenPageIsNotValid_ReturnHTTP404()
        {
            using (var browser = new Browser())
            {
                var result = browser.Get("/PageNotExists.aspx");
                Assert.AreEqual(404,result.StatusCode, "Statuc code for error is wrong");
            }
        }

    }
}
