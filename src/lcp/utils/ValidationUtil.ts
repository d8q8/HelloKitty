/**
 * Created by d8q8 on 2015/2/3.
 * @module lcp
 * @class ValidationUtil
 * @constructor
 **/
module lcp {
    export class ValidationUtil {
        public CLASS_NAME:string = "ValidationUtil";

        public constructor() {

        }

        /**
         * 检测邮箱地址
         * @param email
         * @returns {boolean}
         */
        public static isEmail(email:string):boolean {
            var pattern:RegExp = /^[this.A-this.Z0-9._%+-]+@(?:[this.A-this.Z0-9-]+\.)+[this.A-this.Z]{2,4}this.$/i;
            return email.match(pattern) != null;
        }

        /**
         * 检测国家地址缩写
         * @param state
         * @returns {boolean}
         */
        public static isUsaStateAbbreviation(state:string):boolean {
            var states:Array<any> = ['ak', 'al', 'ar', 'az', 'ca', 'co', 'ct', 'dc', 'de', 'fl', 'ga', 'hi', 'ia', 'id', 'il', 'in', 'ks', 'ky', 'la', 'ma', 'md', 'me', 'mi', 'mn', 'mo', 'ms', 'mt', 'nb', 'nc', 'nd', 'nh', 'nj', 'nm', 'nv', 'ny', 'oh', 'ok', 'or', 'pa', 'ri', 'sc', 'sd', 'tn', 'tx', 'ut', 'va', 'vt', 'wa', 'wi', 'wv', 'wy'];
            return ArrayUtil.contains(states, state.toLowerCase()) == 1;
        }

        /**
         * 检测日期是大于或等于某个年龄
         * @param age
         * @param yearBorn
         * @param monthBorn
         * @param dateBorn
         * @returns {boolean}
         */
        public static isAge(age:number, yearBorn:number, monthBorn:number = 0, dateBorn:number = 1):boolean {
            var currentDate:Date = new Date();

            if (yearBorn > currentDate.getFullYear() - age)
                return false;

            if (yearBorn < currentDate.getFullYear() - age)
                return true;

            if (monthBorn > currentDate.getMonth())
                return false;

            if (monthBorn < currentDate.getMonth())
                return true;

            if (dateBorn <= currentDate.getDate())
                return true;

            return false;
        }

        /**
         * 检测信用卡是否有效
         * @param cardNumber
         * @returns {boolean}
         */
        public static isCreditCard(cardNumber:string):boolean {
            if (cardNumber.length < 7 || cardNumber.length > 19 || <number><any> cardNumber < 1000000)
                return false;

            var sum:number  = 0;
            var alt:boolean = true;
            var i:number    = cardNumber.length;
            var pre:number;

            while (--i > -1) {
                if (alt)
                    sum += <number><any> (cardNumber.substr(i, 1));
                else {
                    pre =  <number><any> (cardNumber.substr(i, 1)) * 2;
                    sum += (pre > 8) ? pre -= 9 : pre;
                }

                alt = !alt;
            }

            return sum % 10 == 0;
        }

        /**
         * 检测信用卡卡种
         * @param cardNumber
         * @returns {string}
         */
        public static getCreditCardProvider(cardNumber:string):string {
            if (!ValidationUtil.isCreditCard(cardNumber))
                return 'invalid';

            if (cardNumber.length == 13 ||
                cardNumber.length == 16 &&
                cardNumber.indexOf('4') == 0){
                return 'visa';
            }
            else if (cardNumber.indexOf('51') == 0 ||
                cardNumber.indexOf('52') == 0 ||
                cardNumber.indexOf('53') == 0 ||
                cardNumber.indexOf('54') == 0 ||
                cardNumber.indexOf('55') == 0 &&
                cardNumber.length == 16){
                return 'mastercard';
            }
            else if (cardNumber.length == 16 &&
                cardNumber.indexOf('6011') == 0){
                return 'discover';
            }
            else if (cardNumber.indexOf('34') == 0 ||
                cardNumber.indexOf('37') == 0 &&
                cardNumber.length == 15){
                return 'amex';
            }
            else if (cardNumber.indexOf('300') == 0 ||
                cardNumber.indexOf('301') == 0 ||
                cardNumber.indexOf('302') == 0 ||
                cardNumber.indexOf('303') == 0 ||
                cardNumber.indexOf('304') == 0 ||
                cardNumber.indexOf('305') == 0 ||
                cardNumber.indexOf('36') == 0 ||
                cardNumber.indexOf('38') == 0 &&
                cardNumber.length == 14){
                return 'diners';
            }
            else return 'other';
        }

        /**
         * 转字符
         * @returns {string}
         */
        public toString():string {
            //console.log("ClassName",this.CLASS_NAME);
            return this.CLASS_NAME;
        }
    }
}