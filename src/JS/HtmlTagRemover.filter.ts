﻿module JoymonOnline {
    "use strict";
    export class HTMLTagRemover {
        public static filter(): ng.IFilterFunction {
            return (text: string): string => { return text ? String(text).replace(/<[^>]+>/gm, '') : '' };
        }
    }
    require('./app/app').JoymonOnline.AppModule.getInstance().registerFilter("removeTags", HTMLTagRemover.filter);
    export class ToDateFilter {
        public static filter(): ng.IFilterFunction {
            return (text: string): Date => { 
                return new Date(text); 
            };
        }
    }
    require('./app/app').JoymonOnline.AppModule.getInstance().registerFilter("toDate", ToDateFilter.filter);
}