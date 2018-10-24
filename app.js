'use strict';

/**
 * Adds commas to a number
 * @return {string}
 */

class Cities {

    constructor() {
        this.cities = [{
                "city_name": "القاهره"
            },
            {
                "city_name": "الجيزة"
            },
            {
                "city_name": "السادس من أكتوبر"
            },
            {
                "city_name": "الشيخ زايد\r\n"
            },
            {
                "city_name": "الحوامدية"
            },
            {
                "city_name": "البدرشين"
            },
            {
                "city_name": "الصف"
            },
            {
                "city_name": "أطفيح"
            },
            {
                "city_name": "العياط"
            },
            {
                "city_name": "الباويطي"
            },
            {
                "city_name": "منشأة القناطر"
            },
            {
                "city_name": "أوسيم"
            },
            {
                "city_name": "كرداسة"
            },
            {
                "city_name": "أبو النمرس"
            },
            {
                "city_name": "كفر غطاطي"
            },
            {
                "city_name": "منشأة البكاري"
            },
            {
                "city_name": "الأسكندرية"
            },
            {
                "city_name": "برج العرب"
            },
            {
                "city_name": "برج العرب الجديدة"
            },
            {
                "city_name": "بنها"
            },
            {
                "city_name": "قليوب"
            },
            {
                "city_name": "شبرا الخيمة"
            },
            {
                "city_name": "القناطر الخيرية"
            },
            {
                "city_name": "الخانكة"
            },
            {
                "city_name": "كفر شكر"
            },
            {
                "city_name": "طوخ"
            },
            {
                "city_name": "قها"
            },
            {
                "city_name": "العبور"
            },
            {
                "city_name": "الخصوص"
            },
            {
                "city_name": "شبين القناطر"
            },
            {
                "city_name": "دمنهور"
            },
            {
                "city_name": "كفر الدوار"
            },
            {
                "city_name": "رشيد"
            },
            {
                "city_name": "إدكو"
            },
            {
                "city_name": "أبو المطامير"
            },
            {
                "city_name": "أبو حمص"
            },
            {
                "city_name": "الدلنجات"
            },
            {
                "city_name": "المحمودية"
            },
            {
                "city_name": "الرحمانية"
            },
            {
                "city_name": "إيتاي البارود"
            },
            {
                "city_name": "حوش عيسى"
            },
            {
                "city_name": "شبراخيت"
            },
            {
                "city_name": "كوم حمادة"
            },
            {
                "city_name": "بدر"
            },
            {
                "city_name": "وادي النطرون"
            },
            {
                "city_name": "النوبارية الجديدة"
            },
            {
                "city_name": "مرسى مطروح"
            },
            {
                "city_name": "الحمام"
            },
            {
                "city_name": "العلمين"
            },
            {
                "city_name": "الضبعة"
            },
            {
                "city_name": "النجيلة"
            },
            {
                "city_name": "سيدي براني"
            },
            {
                "city_name": "السلوم"
            },
            {
                "city_name": "سيوة"
            },
            {
                "city_name": "دمياط"
            },
            {
                "city_name": "دمياط الجديدة"
            },
            {
                "city_name": "رأس البر"
            },
            {
                "city_name": "فارسكور"
            },
            {
                "city_name": "الزرقا"
            },
            {
                "city_name": "السرو"
            },
            {
                "city_name": "الروضة"
            },
            {
                "city_name": "كفر البطيخ"
            },
            {
                "city_name": "عزبة البرج"
            },
            {
                "city_name": "ميت أبو غالب"
            },
            {
                "city_name": "كفر سعد"
            },
            {
                "city_name": "المنصورة"
            },
            {
                "city_name": "طلخا"
            },
            {
                "city_name": "ميت غمر"
            },
            {
                "city_name": "دكرنس"
            },
            {
                "city_name": "أجا"
            },
            {
                "city_name": "منية النصر"
            },
            {
                "city_name": "السنبلاوين"
            },
            {
                "city_name": "الكردي"
            },
            {
                "city_name": "بني عبيد"
            },
            {
                "city_name": "المنزلة"
            },
            {
                "city_name": "تمي الأمديد"
            },
            {
                "city_name": "الجمالية"
            },
            {
                "city_name": "شربين"
            },
            {
                "city_name": "المطرية"
            },
            {
                "city_name": "بلقاس"
            },
            {
                "city_name": "ميت سلسيل"
            },
            {
                "city_name": "جمصة"
            },
            {
                "city_name": "محلة دمنة"
            },
            {
                "city_name": "نبروه"
            },
            {
                "city_name": "كفر الشيخ"
            },
            {
                "city_name": "دسوق"
            },
            {
                "city_name": "فوه"
            },
            {
                "city_name": "مطوبس"
            },
            {
                "city_name": "برج البرلس"
            },
            {
                "city_name": "بلطيم"
            },
            {
                "city_name": "مصيف بلطيم"
            },
            {
                "city_name": "الحامول"
            },
            {
                "city_name": "بيلا"
            },
            {
                "city_name": "الرياض"
            },
            {
                "city_name": "سيدي سالم"
            },
            {
                "city_name": "قلين"
            },
            {
                "city_name": "سيدي غازي"
            },
            {
                "city_name": "طنطا"
            },
            {
                "city_name": "المحلة الكبرى"
            },
            {
                "city_name": "كفر الزيات"
            },
            {
                "city_name": "زفتى"
            },
            {
                "city_name": "السنطة"
            },
            {
                "city_name": "قطور"
            },
            {
                "city_name": "بسيون"
            },
            {
                "city_name": "سمنود"
            },
            {
                "city_name": "شبين الكوم"
            },
            {
                "city_name": "مدينة السادات"
            },
            {
                "city_name": "منوف"
            },
            {
                "city_name": "سرس الليان"
            },
            {
                "city_name": "أشمون"
            },
            {
                "city_name": "الباجور"
            },
            {
                "city_name": "قويسنا"
            },
            {
                "city_name": "بركة السبع"
            },
            {
                "city_name": "تلا"
            },
            {
                "city_name": "الشهداء"
            },
            {
                "city_name": "الزقازيق"
            },
            {
                "city_name": "العاشر من رمضان"
            },
            {
                "city_name": "منيا القمح"
            },
            {
                "city_name": "بلبيس"
            },
            {
                "city_name": "مشتول السوق"
            },
            {
                "city_name": "القنايات"
            },
            {
                "city_name": "أبو حماد"
            },
            {
                "city_name": "القرين"
            },
            {
                "city_name": "ههيا"
            },
            {
                "city_name": "أبو كبير"
            },
            {
                "city_name": "فاقوس"
            },
            {
                "city_name": "الصالحية الجديدة"
            },
            {
                "city_name": "الإبراهيمية"
            },
            {
                "city_name": "ديرب نجم"
            },
            {
                "city_name": "كفر صقر"
            },
            {
                "city_name": "أولاد صقر"
            },
            {
                "city_name": "الحسينية"
            },
            {
                "city_name": "صان الحجر القبلية"
            },
            {
                "city_name": "منشأة أبو عمر"
            },
            {
                "city_name": "بورسعيد"
            },
            {
                "city_name": "بورفؤاد"
            },
            {
                "city_name": "الإسماعيلية"
            },
            {
                "city_name": "فايد"
            },
            {
                "city_name": "القنطرة شرق"
            },
            {
                "city_name": "القنطرة غرب"
            },
            {
                "city_name": "التل الكبير"
            },
            {
                "city_name": "أبو صوير"
            },
            {
                "city_name": "القصاصين الجديدة"
            },
            {
                "city_name": "السويس"
            },
            {
                "city_name": "العريش"
            },
            {
                "city_name": "الشيخ زويد"
            },
            {
                "city_name": "نخل"
            },
            {
                "city_name": "رفح"
            },
            {
                "city_name": "بئر العبد"
            },
            {
                "city_name": "الحسنة"
            },
            {
                "city_name": "الطور"
            },
            {
                "city_name": "شرم الشيخ"
            },
            {
                "city_name": "دهب"
            },
            {
                "city_name": "نويبع"
            },
            {
                "city_name": "طابا"
            },
            {
                "city_name": "سانت كاترين"
            },
            {
                "city_name": "أبو رديس"
            },
            {
                "city_name": "أبو زنيمة"
            },
            {
                "city_name": "رأس سدر"
            },
            {
                "city_name": "بني سويف"
            },
            {
                "city_name": "بني سويف الجديدة"
            },
            {
                "city_name": "الواسطى"
            },
            {
                "city_name": "ناصر"
            },
            {
                "city_name": "إهناسيا"
            },
            {
                "city_name": "ببا"
            },
            {
                "city_name": "الفشن"
            },
            {
                "city_name": "سمسطا"
            },
            {
                "city_name": "الفيوم"
            },
            {
                "city_name": "الفيوم الجديدة"
            },
            {
                "city_name": "طامية"
            },
            {
                "city_name": "سنورس"
            },
            {
                "city_name": "إطسا"
            },
            {
                "city_name": "إبشواي"
            },
            {
                "city_name": "يوسف الصديق"
            },
            {
                "city_name": "المنيا"
            },
            {
                "city_name": "المنيا الجديدة"
            },
            {
                "city_name": "العدوة"
            },
            {
                "city_name": "مغاغة"
            },
            {
                "city_name": "بني مزار"
            },
            {
                "city_name": "مطاي"
            },
            {
                "city_name": "سمالوط"
            },
            {
                "city_name": "المدينة الفكرية"
            },
            {
                "city_name": "ملوي"
            },
            {
                "city_name": "دير مواس"
            },
            {
                "city_name": "أسيوط"
            },
            {
                "city_name": "أسيوط الجديدة"
            },
            {
                "city_name": "ديروط"
            },
            {
                "city_name": "منفلوط"
            },
            {
                "city_name": "القوصية"
            },
            {
                "city_name": "أبنوب"
            },
            {
                "city_name": "أبو تيج"
            },
            {
                "city_name": "الغنايم"
            },
            {
                "city_name": "ساحل سليم"
            },
            {
                "city_name": "البداري"
            },
            {
                "city_name": "صدفا"
            },
            {
                "city_name": "الخارجة"
            },
            {
                "city_name": "باريس"
            },
            {
                "city_name": "موط"
            },
            {
                "city_name": "الفرافرة"
            },
            {
                "city_name": "بلاط"
            },
            {
                "city_name": "الغردقة"
            },
            {
                "city_name": "رأس غارب"
            },
            {
                "city_name": "سفاجا"
            },
            {
                "city_name": "القصير"
            },
            {
                "city_name": "مرسى علم"
            },
            {
                "city_name": "الشلاتين"
            },
            {
                "city_name": "حلايب"
            },
            {
                "city_name": "سوهاج"
            },
            {
                "city_name": "سوهاج الجديدة"
            },
            {
                "city_name": "أخميم"
            },
            {
                "city_name": "أخميم الجديدة"
            },
            {
                "city_name": "البلينا"
            },
            {
                "city_name": "المراغة"
            },
            {
                "city_name": "المنشأة"
            },
            {
                "city_name": "دار السلام"
            },
            {
                "city_name": "جرجا"
            },
            {
                "city_name": "جهينة الغربية"
            },
            {
                "city_name": "ساقلته"
            },
            {
                "city_name": "طما"
            },
            {
                "city_name": "طهطا"
            },
            {
                "city_name": "قنا"
            },
            {
                "city_name": "قنا الجديدة"
            },
            {
                "city_name": "أبو تشت"
            },
            {
                "city_name": "نجع حمادي"
            },
            {
                "city_name": "دشنا"
            },
            {
                "city_name": "الوقف"
            },
            {
                "city_name": "قفط"
            },
            {
                "city_name": "نقادة"
            },
            {
                "city_name": "فرشوط"
            },
            {
                "city_name": "قوص"
            },
            {
                "city_name": "الأقصر"
            },
            {
                "city_name": "الأقصر الجديدة"
            },
            {
                "city_name": "إسنا"
            },
            {
                "city_name": "طيبة الجديدة"
            },
            {
                "city_name": "الزينية"
            },
            {
                "city_name": "البياضية"
            },
            {
                "city_name": "القرنة"
            },
            {
                "city_name": "أرمنت"
            },
            {
                "city_name": "الطود"
            },
            {
                "city_name": "أسوان"
            },
            {
                "city_name": "أسوان الجديدة"
            },
            {
                "city_name": "دراو"
            },
            {
                "city_name": "كوم أمبو"
            },
            {
                "city_name": "نصر النوبة"
            },
            {
                "city_name": "كلابشة"
            },
            {
                "city_name": "إدفو"
            },
            {
                "city_name": "الرديسية"
            },
            {
                "city_name": "البصيلية"
            },
            {
                "city_name": "السباعية"
            },
            {
                "city_name": "ابوسمبل السياحية"
            }
        ]
    }

    /**
     * Adds commas to a number
     * @return {Array}
     */

    localCities() {
        return this.cities;
    }
}
module.exports = new Cities()