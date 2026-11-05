class class_arabi {
    constructor() {
        // الإعدادات الافتراضية:
        this.defLang = "en";               // ar: أرقام عربية، fa: أرقام فارسية، en: أرقام إنجليزية
        this.e_harakat = 1;                // تفعيل/تعطيل التشكيل: 0 أو 1
        this.dir = "rtl";
        this.reverse = true;               // عكس ترتيب المحارف حسب طريقة العرض المستخدمة

        // خصائص تقسيم الأسطر وتمديد الكلمات بالكشيدة:
        this.wordsPerLine = 6;             // أقصى عدد كلمات في السطر، و0 لتعطيل تقسيم الكلمات
        this.lineLength = 0;               // العرض المستهدف بالبكسل؛ 0 = عرض أطول سطر تلقائياً
        this.stretchLastLine = false;      // تمديد السطر الأخير من كل فقرة أيضاً
        this.preserveInputLines = false;   // محفوظ للتوافق مع الاستعمال السابق

        // صيغة الخط وفق معيار CSS (يُفضل مطابقته مع خط عنصر العرض)
        this.measureFont = "24px Arial";

        // قوائم الأرقام
        this.numbers = {
            ar: "٠١٢٣٤٥٦٧٨٩",
            fa: "۰۱۲۳۴۵۶۷۸۹",
            en: "0123456789"
        };

        this.outbox = "";
        this.laaIndex = 8 * 50;

        // الحروف التي تقبل الاتصال بما بعدها
        this.left = "یٹہےگکڤچپـئظشسيبلتنمكطضصثقفغعهخحج";
        // الحروف التي تقبل الاتصال بما قبلها
        this.right = "یٹہےڈڑگکڤژچپـئؤرلالآىآةوزظشسيبللأاأتنمكطضصثقفغعهخحجدذلإإۇۆۈ";

        this.harakat = "ًٌٍَُِّْ";
        this.symbols = "ـ.،؟؛!\"'«» @#$%^&*-+|\\/=~,:";

        this.unicode =
            "ﺁ ﺁ ﺂ ﺂ " + "ﺃ ﺃ ﺄ ﺄ " + "ﺇ ﺇ ﺈ ﺈ " + "ﺍ ﺍ ﺎ ﺎ " + "ﺏ ﺑ ﺒ ﺐ " + "ﺕ ﺗ ﺘ ﺖ " + "ﺙ ﺛ ﺜ ﺚ " + "ﺝ ﺟ ﺠ ﺞ " + "ﺡ ﺣ ﺤ ﺢ " + "ﺥ ﺧ ﺨ ﺦ " +
            "ﺩ ﺩ ﺪ ﺪ " + "ﺫ ﺫ ﺬ ﺬ " + "ﺭ ﺭ ﺮ ﺮ " + "ﺯ ﺯ ﺰ ﺰ " + "ﺱ ﺳ ﺴ ﺲ " + "ﺵ ﺷ ﺸ ﺶ " + "ﺹ ﺻ ﺼ ﺺ " + "ﺽ ﺿ ﻀ ﺾ " + "ﻁ ﻃ ﻄ ﻂ " + "ﻅ ﻇ ﻈ ﻆ " +
            "ﻉ ﻋ ﻌ ﻊ " + "ﻍ ﻏ ﻐ ﻎ " + "ﻑ ﻓ ﻔ ﻒ " + "ﻕ ﻗ ﻘ ﻖ " + "ﻙ ﻛ ﻜ ﻚ " + "ﻝ ﻟ ﻠ ﻞ " + "ﻡ ﻣ ﻤ ﻢ " + "ﻥ ﻧ ﻨ ﻦ " + "ﻩ ﻫ ﻬ ﻪ " + "ﻭ ﻭ ﻮ ﻮ " +
            "ﻱ ﻳ ﻴ ﻲ " + "ﺓ ﺓ ﺔ ﺔ " + "ﺅ ﺅ ﺆ ﺆ " + "ﺉ ﺋ ﺌ  " + "ﻯ ﻯ ﻰ ﻰ " + "ﭖ ﭘ ﭙ ﭗ " + "ﭺ ﭼ ﭽ ﭻ " + "ﮊ ﮊ ﮋ ﮋ " + "ﭪ ﭬ ﭭ ﭫ " + "ﮒ ﮔ ﮕ ﮓ " +
            "ﭦ ﭨ ﭩ ﭧ " + "ﮦ ﮨ ﮩ ﮧ " + "ﮮ ﮰ ﮱ ﮯ " + "ﯼ ﯾ ﯿ ﯽ " + "ﮈ ﮈ ﮉ ﮉ " + "ﮌ ﮌ ﮍ ﮍ " + "ﯗ ﯗ ﯘ ﯘ " + "ﯙ ﯙ ﯚ ﯚ " + "ﯛ ﯛ ﯜ ﯜ " + "ﮎ ﮐ ﮑ ﮏ " +
            "ﻵ ﻵ ﻶ ﻶ " + "ﻷ ﻷ ﻸ ﻸ " + "ﻹ ﻹ ﻺ ﻺ " + "ﻻ ﻻ ﻼ ﻼ ";

        this.Letters =
            "آ" + "أ" + "إ" + "ا" + "ب" + "ت" + "ث" + "ج" + "ح" + "خ" +
            "د" + "ذ" + "ر" + "ز" + "س" + "ش" + "ص" + "ض" + "ط" + "ظ" +
            "ع" + "غ" + "ف" + "ق" + "ك" + "ل" + "م" + "ن" + "ه" + "و" +
            "ي" + "ة" + "ؤ" + "ئ" + "ى" + "پ" + "چ" + "ژ" + "ڤ" + "گ" +
            "ٹ" + "ہ" + "ے" + "ی" + "ڈ" + "ڑ" + "ۇ" + "ۆ" + "ۈ" + "ک";

        this.notEng = this.Letters + this.harakat + "ء،؟";
        this.brackets = "(){}[]";

        // تهيئة Canvas مخفي لقياس أبعاد النصوص بالبكسل
        this._ctx = null;
        if (typeof document !== "undefined") {
            const canvas = document.createElement("canvas");
            this._ctx = canvas.getContext("2d");
        }
    }

    /**
     * دالة مساعدة إضافية لنسخ إعدادات الخط تلقائياً من أي عنصر HTML في الصفحة
     * @param {HTMLElement} element 
     */
    syncFontWithElement(element) {
        if (typeof window !== "undefined" && element) {
            const style = window.getComputedStyle(element);
            this.measureFont = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`.trim();
        }
    }

    To_Arabic_Support_Text(inpbox) {
        if (!inpbox) return "";

        // تقسيم الأسطر وتمديدها قبل تحويل الحروف إلى أشكالها العربية
        const processedInput = this.FormatLinesAndStretch(inpbox);

        this.outbox = "";
        let fullResult = "";
        const chars_array = Array.from(processedInput);
        const totalLength = chars_array.length;
        let pos = 0;

        for (let char_index = 0; char_index < totalLength; char_index++) {
            // تجاوز التشكيل والكشيدة عند فحص اتصال الحروف
            let prevIndex = char_index - 1;
            while (
                prevIndex >= 0 &&
                (this.harakat.indexOf(chars_array[prevIndex]) >= 0 || chars_array[prevIndex] === "ـ")
            ) {
                prevIndex -= 1;
            }

            let nextIndex = char_index + 1;
            while (
                nextIndex < totalLength &&
                (this.harakat.indexOf(chars_array[nextIndex]) >= 0 || chars_array[nextIndex] === "ـ")
            ) {
                nextIndex += 1;
            }

            const connectsPrev = prevIndex >= 0 && this.left.indexOf(chars_array[prevIndex]) >= 0;
            const connectsNext = nextIndex < totalLength && this.right.indexOf(chars_array[nextIndex]) >= 0;

            if (!connectsPrev && !connectsNext) {
                pos = 0;
            } else if (!connectsPrev && connectsNext) {
                pos = 2;
            } else if (connectsPrev && connectsNext) {
                pos = 4;
            } else {
                pos = 6;
            }

            const currentChar = chars_array[char_index];

            if (currentChar === "\n") {
                fullResult += this.outbox + "\n";
                this.outbox = "";

            } else if (currentChar === "\r") {
                // تجاهل CR بعد توحيد نهايات الأسطر

            } else if (currentChar === "ء") {
                this.addChar("ﺀ");

            } else if (this.brackets.indexOf(currentChar) >= 0) {
                if (this.reverse) {
                    const bracketIndex = this.brackets.indexOf(currentChar);
                    if (bracketIndex % 2 === 0) {
                        this.addChar(this.brackets.charAt(bracketIndex + 1));
                    } else {
                        this.addChar(this.brackets.charAt(bracketIndex - 1));
                    }
                } else {
                    this.addChar(currentChar);
                }

            } else if (this.Letters.indexOf(currentChar) >= 0) {
                if (currentChar === "ل") {
                    // لا نسمح بتكوين لام ألف إذا كانت الكشيدة موجودة بين الحرفين
                    let lamAlefNext = char_index + 1;
                    while (
                        lamAlefNext < totalLength &&
                        this.harakat.indexOf(chars_array[lamAlefNext]) >= 0
                    ) {
                        lamAlefNext += 1;
                    }

                    let ar_pos = -1;
                    if (lamAlefNext < totalLength) {
                        ar_pos = this.Letters.indexOf(chars_array[lamAlefNext]);
                    }

                    if (ar_pos >= 0 && ar_pos < 4) {
                        const laaPos = connectsPrev ? 6 : 0;
                        this.addChar(this.unicode.charAt((ar_pos * 8) + laaPos + this.laaIndex));

                        if (this.e_harakat === 1) {
                            for (let hIdx = char_index + 1; hIdx <= lamAlefNext - 1; hIdx++) {
                                this.addChar(chars_array[hIdx]);
                            }
                        }

                        char_index = lamAlefNext;
                    } else {
                        this.addChar(this.unicode.charAt((this.Letters.indexOf(currentChar) * 8) + pos));
                    }
                } else {
                    this.addChar(this.unicode.charAt((this.Letters.indexOf(currentChar) * 8) + pos));
                }

            } else if (this.symbols.indexOf(currentChar) >= 0) {
                this.addChar(currentChar);

            } else if (this.harakat.indexOf(currentChar) >= 0) {
                if (this.e_harakat === 1) {
                    this.addChar(currentChar);
                }

            } else if (this.unicode.indexOf(currentChar) >= 0) {
                const uni_pos = this.unicode.indexOf(currentChar);
                const la_pos = uni_pos;

                if (la_pos >= this.laaIndex) {
                    for (let temp = 8; temp <= 32; temp += 8) {
                        if (la_pos < (temp + this.laaIndex)) {
                            const letterIdx = Math.floor(temp / 8) - 1;
                            if (this.reverse) {
                                this.addChar(this.Letters.charAt(letterIdx));
                                this.addChar("ل");
                            } else {
                                this.addChar("ل");
                                this.addChar(this.Letters.charAt(letterIdx));
                            }
                            break;
                        }
                    }
                } else {
                    for (let temp = 8; temp <= this.laaIndex; temp += 8) {
                        if (uni_pos < temp) {
                            const letterIdx = Math.floor(temp / 8) - 1;
                            this.addChar(this.Letters.charAt(letterIdx));
                            break;
                        }
                    }
                }

            } else {
                let h = char_index;
                let tstr = "";

                while (
                    h < totalLength &&
                    this.notEng.indexOf(chars_array[h]) < 0 &&
                    this.unicode.indexOf(chars_array[h]) < 0 &&
                    this.brackets.indexOf(chars_array[h]) < 0 &&
                    chars_array[h] !== "\r" &&
                    chars_array[h] !== "\n"
                ) {
                    for (const [key, val] of Object.entries(this.numbers)) {
                        const digitIndex = val.indexOf(chars_array[h]);
                        if (digitIndex >= 0 && this.numbers[this.defLang]) {
                            chars_array[h] = this.numbers[this.defLang].charAt(digitIndex);
                        }
                    }

                    tstr += chars_array[h];
                    h += 1;
                }

                let engSegment = tstr;

                if (this.reverse) {
                    const xstr = Array.from(engSegment);
                    if (xstr.length > 1) {
                        let r = xstr.length - 1;
                        if (r === 1 && xstr[1] === " ") {
                            engSegment = " " + xstr[0];
                        } else {
                            while (r >= 0 && xstr[r] === " ") {
                                engSegment = " " + engSegment.substring(0, engSegment.length - 1);
                                r -= 1;
                            }
                        }
                    }
                    this.outbox = engSegment + this.outbox;
                } else {
                    this.outbox += engSegment;
                }

                char_index = h - 1;
            }
        }

        fullResult += this.outbox;
        return fullResult;
    }

    NormalizeLineBreaks(value) {
        if (!value) return "";
        return value
            .replace(/\r\n/g, "\n")
            .replace(/\r/g, "\n")
            .replace(/\u2028/g, "\n")
            .replace(/\u2029/g, "\n");
    }

    FormatLinesAndStretch(text) {
        const normalizedText = this.NormalizeLineBreaks(text);
        const rawParagraphs = normalizedText.split("\n");

        const allLines = [];
        const isLastLineOfParagraph = [];

        for (const paragraph of rawParagraphs) {
            if (!paragraph || paragraph.trim().length === 0) {
                allLines.push(paragraph);
                isLastLineOfParagraph.push(true);
                continue;
            }

            const paragraphLines = [];

            if (this.wordsPerLine <= 0) {
                paragraphLines.push(paragraph);
            } else {
                const words = paragraph.trim().split(/\s+/);
                let currentLine = "";
                let wordCount = 0;

                for (const w of words) {
                    if (!w) continue;

                    if (wordCount > 0) currentLine += " ";
                    currentLine += w;
                    wordCount += 1;

                    if (wordCount >= this.wordsPerLine) {
                        paragraphLines.push(currentLine);
                        currentLine = "";
                        wordCount = 0;
                    }
                }

                if (currentLine.length > 0) {
                    paragraphLines.push(currentLine);
                }
            }

            for (let i = 0; i < paragraphLines.length; i++) {
                allLines.push(paragraphLines[i]);
                isLastLineOfParagraph.push(i === paragraphLines.length - 1);
            }
        }

        if (allLines.length === 0) return "";

        let targetWidth = 0.0;

        if (this.lineLength > 0) {
            targetWidth = Number(this.lineLength);
        } else {
            for (const ln of allLines) {
                targetWidth = Math.max(targetWidth, this.MeasureExactVisualWidth(ln));
            }
        }

        for (let i = 0; i < allLines.length; i++) {
            if (!allLines[i] || allLines[i].trim().length === 0) continue;

            if (this.stretchLastLine || !isLastLineOfParagraph[i]) {
                allLines[i] = this.StretchLineToExactWidth(allLines[i], targetWidth);
            }
        }

        return allLines.join("\n");
    }

    MeasureExactVisualWidth(str) {
        if (!str || !this.measureFont) return 0.0;

        let cleanStr = "";
        for (const c of str) {
            if (this.harakat.indexOf(c) < 0) {
                cleanStr += c;
            }
        }

        if (!this._ctx) return cleanStr.length * 10;

        this._ctx.font = this.measureFont;
        const measurable = "|" + cleanStr + "|";

        const boundsWidth = this._ctx.measureText("||").width;
        const fullWidth = this._ctx.measureText(measurable).width;

        return Math.max(0.0, fullWidth - boundsWidth);
    }

    StretchLineToExactWidth(line, targetPixelWidth) {
        if (!line || targetPixelWidth <= 0.0) return line;

        const currentWidth = this.MeasureExactVisualWidth(line);
        if (currentWidth >= targetPixelWidth) return line;

        const insertionPoints = [];
        const chars = Array.from(line);
        const textLength = chars.length;

        for (let i = 0; i < textLength; i++) {
            const c1 = chars[i];

            if (c1 === "ـ" || this.left.indexOf(c1) < 0) continue;

            let nextIdx = i + 1;

            while (
                nextIdx < textLength &&
                (this.harakat.indexOf(chars[nextIdx]) >= 0 || chars[nextIdx] === "ـ")
            ) {
                nextIdx += 1;
            }

            if (nextIdx >= textLength) continue;

            const c2 = chars[nextIdx];
            if (this.right.indexOf(c2) < 0) continue;

            // لا تضع الكشيدة بين اللام وأحد أشكال الألف
            if (c1 === "ل" && "آأإا".indexOf(c2) >= 0) continue;

            insertionPoints.push(nextIdx);
        }

        if (insertionPoints.length === 0) return line;

        let kashidaWidth = this.MeasureExactVisualWidth("ـ");
        if (kashidaWidth < 1.0) kashidaWidth = 5.0;

        const missingWidth = targetPixelWidth - currentWidth;
        const estimate = Math.floor(missingWidth / kashidaWidth);
        const neededKashidas = Math.trunc(Math.max(0, Math.min(1000, estimate)));

        const kashidaPerPoint = new Array(insertionPoints.length).fill(0);

        for (let k = 0; k < neededKashidas; k++) {
            kashidaPerPoint[k % insertionPoints.length] += 1;
        }

        let result = this.BuildLineWithKashidas(line, insertionPoints, kashidaPerPoint);
        let resultWidth = this.MeasureExactVisualWidth(result);

        let added = neededKashidas;
        let nextPoint = neededKashidas % insertionPoints.length;
        const maxKashidas = 1000;

        while (resultWidth + 0.5 < targetPixelWidth && added < maxKashidas) {
            kashidaPerPoint[nextPoint] += 1;
            added += 1;
            nextPoint = (nextPoint + 1) % insertionPoints.length;

            result = this.BuildLineWithKashidas(line, insertionPoints, kashidaPerPoint);
            resultWidth = this.MeasureExactVisualWidth(result);
        }

        return result;
    }

    BuildLineWithKashidas(line, insertionPoints, kashidaPerPoint) {
        let sb = "";
        let lastPos = 0;

        for (let pointIndex = 0; pointIndex < insertionPoints.length; pointIndex++) {
            const insertPos = insertionPoints[pointIndex];

            sb += line.substring(lastPos, insertPos);

            if (kashidaPerPoint[pointIndex] > 0) {
                sb += "ـ".repeat(kashidaPerPoint[pointIndex]);
            }

            lastPos = insertPos;
        }

        sb += line.substring(lastPos);
        return sb;
    }

    addChar(chr) {
        if (this.reverse) {
            this.outbox = chr + this.outbox;
        } else {
            this.outbox += chr;
        }
    }
}