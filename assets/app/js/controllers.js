'use strict';

/* Controllers */

function EmojiListCtrl($scope) {
    $scope.emojis = [
        {
            "code": "1&#x20e3;",
            "name": "KEYCAP 1"
        },
        {
            "code": "2&#x20e3;",
            "name": "KEYCAP 2"
        },
        {
            "code": "3&#x20e3;",
            "name": "KEYCAP 3"
        },
        {
            "code": "4&#x20e3;",
            "name": "KEYCAP 4"
        },
        {
            "code": "5&#x20e3;",
            "name": "KEYCAP 5"
        },
        {
            "code": "6&#x20e3;",
            "name": "KEYCAP 6"
        },
        {
            "code": "7&#x20e3;",
            "name": "KEYCAP 7"
        },
        {
            "code": "8&#x20e3;",
            "name": "KEYCAP 8"
        },
        {
            "code": "9&#x20e3;",
            "name": "KEYCAP 9"
        },
        {
            "code": "0&#x20e3;",
            "name": "KEYCAP 0"
        },
        {
            "code": "&#x1f51f;",
            "name": "KEYCAP TEN"
        },
        {
            "code": "&#x1f522;",
            "name": "INPUT SYMBOL FOR NUMBERS"
        },
        {
            "code": "#&#x20e3;",
            "name": "HASH KEY"
        },
        {
            "code": "&#x1f523;",
            "name": "INPUT SYMBOL FOR SYMBOLS"
        },
        {
            "code": "&#x2b06;",
            "name": "UPWARDS BLACK ARROW"
        },
        {
            "code": "&#x2b07;",
            "name": "DOWNWARDS BLACK ARROW"
        },
        {
            "code": "&#x2b05;",
            "name": "LEFTWARDS BLACK ARROW"
        },
        {
            "code": "&#x27a1;",
            "name": "BLACK RIGHTWARDS ARROW"
        },
        {
            "code": "&#x1f520;",
            "name": "INPUT SYMBOL FOR LATIN CAPITAL LETTERS"
        },
        {
            "code": "&#x1f521;",
            "name": "INPUT SYMBOL FOR LATIN SMALL LETTERS"
        },
        {
            "code": "&#x1f524;",
            "name": "INPUT SYMBOL FOR LATIN LETTERS"
        },
        {
            "code": "&#x2197;",
            "name": "NORTH EAST ARROW"
        },
        {
            "code": "&#x2196;",
            "name": "NORTH WEST ARROW"
        },
        {
            "code": "&#x2198;",
            "name": "SOUTH EAST ARROW"
        },
        {
            "code": "&#x2199;",
            "name": "SOUTH WEST ARROW"
        },
        {
            "code": "&#x2194;",
            "name": "LEFT RIGHT ARROW"
        },
        {
            "code": "&#x2195;",
            "name": "UP DOWN ARROW"
        },
        {
            "code": "&#x1f504;",
            "name": "ANTICLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS"
        },
        {
            "code": "&#x25c0;",
            "name": "BLACK LEFT-POINTING TRIANGLE"
        },
        {
            "code": "&#x25b6;",
            "name": "BLACK RIGHT-POINTING TRIANGLE"
        },
        {
            "code": "&#x1f53c;",
            "name": "UP-POINTING SMALL RED TRIANGLE"
        },
        {
            "code": "&#x1f53d;",
            "name": "DOWN-POINTING SMALL RED TRIANGLE"
        },
        {
            "code": "&#x21a9;",
            "name": "LEFTWARDS ARROW WITH HOOK"
        },
        {
            "code": "&#x21aa;",
            "name": "RIGHTWARDS ARROW WITH HOOK"
        },
        {
            "code": "&#x2139;",
            "name": "INFORMATION SOURCE"
        },
        {
            "code": "&#x23ea;",
            "name": "BLACK LEFT-POINTING DOUBLE TRIANGLE"
        },
        {
            "code": "&#x23e9;",
            "name": "BLACK RIGHT-POINTING DOUBLE TRIANGLE"
        },
        {
            "code": "&#x23eb;",
            "name": "BLACK UP-POINTING DOUBLE TRIANGLE"
        },
        {
            "code": "&#x23ec;",
            "name": "BLACK DOWN-POINTING DOUBLE TRIANGLE"
        },
        {
            "code": "&#x2935;",
            "name": "ARROW POINTING RIGHTWARDS THEN CURVING DOWNWARDS"
        },
        {
            "code": "&#x2934;",
            "name": "ARROW POINTING RIGHTWARDS THEN CURVING UPWARDS"
        },
        {
            "code": "&#x1f197;",
            "name": "SQUARED OK"
        },
        {
            "code": "&#x1f500;",
            "name": "TWISTED RIGHTWARDS ARROWS"
        },
        {
            "code": "&#x1f501;",
            "name": "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS"
        },
        {
            "code": "&#x1f502;",
            "name": "CLOCKWISE RIGHTWARDS AND LEFTWARDS OPEN CIRCLE ARROWS WITH CIRCLED ONE OVERLAY"
        },
        {
            "code": "&#x1f195;",
            "name": "SQUARED NEW"
        },
        {
            "code": "&#x1f199;",
            "name": "SQUARED UP WITH EXCLAMATION MARK"
        },
        {
            "code": "&#x1f192;",
            "name": "SQUARED COOL"
        },
        {
            "code": "&#x1f193;",
            "name": "SQUARED FREE"
        },
        {
            "code": "&#x1f196;",
            "name": "SQUARED NG"
        },
        {
            "code": "&#x1f4f6;",
            "name": "ANTENNA WITH BARS"
        },
        {
            "code": "&#x1f3a6;",
            "name": "CINEMA"
        },
        {
            "code": "&#x1f201;",
            "name": "SQUARED KATAKANA KOKO"
        },
        {
            "code": "&#x1f22f;",
            "name": "SQUARED CJK UNIFIED IDEOGRAPH-6307"
        },
        {
            "code": "&#x1f233;",
            "name": "SQUARED CJK UNIFIED IDEOGRAPH-7A7A"
        },
        {
            "code": "&#x1f235;",
            "name": "SQUARED CJK UNIFIED IDEOGRAPH-6E80"
        },
        {
            "code": "&#x1f234;",
            "name": "SQUARED CJK UNIFIED IDEOGRAPH-5408"
        },
        {
            "code": "&#x1f232;",
            "name": "SQUARED CJK UNIFIED IDEOGRAPH-7981"
        },
        {
            "code": "&#x1f250;",
            "name": "CIRCLED IDEOGRAPH ADVANTAGE"
        },
        {
            "code": "&#x1f239;",
            "name": "SQUARED CJK UNIFIED IDEOGRAPH-5272"
        },
        {
            "code": "&#x1f23a;",
            "name": "SQUARED CJK UNIFIED IDEOGRAPH-55B6"
        },
        {
            "code": "&#x1f236;",
            "name": "SQUARED CJK UNIFIED IDEOGRAPH-6709"
        },
        {
            "code": "&#x1f21a;",
            "name": "SQUARED CJK UNIFIED IDEOGRAPH-7121"
        },
        {
            "code": "&#x1f6bb;",
            "name": "RESTROOM"
        },
        {
            "code": "&#x1f6b9;",
            "name": "MENS SYMBOL"
        },
        {
            "code": "&#x1f6ba;",
            "name": "WOMENS SYMBOL"
        },
        {
            "code": "&#x1f6bc;",
            "name": "BABY SYMBOL"
        },
        {
            "code": "&#x1f6be;",
            "name": "WATER CLOSET"
        },
        {
            "code": "&#x1f6b0;",
            "name": "POTABLE WATER SYMBOL"
        },
        {
            "code": "&#x1f6ae;",
            "name": "PUT LITTER IN ITS PLACE SYMBOL"
        },
        {
            "code": "&#x1f17f;",
            "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER P"
        },
        {
            "code": "&#x267f;",
            "name": "WHEELCHAIR SYMBOL"
        },
        {
            "code": "&#x1f6ad;",
            "name": "NO SMOKING SYMBOL"
        },
        {
            "code": "&#x1f237;",
            "name": "SQUARED CJK UNIFIED IDEOGRAPH-6708"
        },
        {
            "code": "&#x1f238;",
            "name": "SQUARED CJK UNIFIED IDEOGRAPH-7533"
        },
        {
            "code": "&#x1f202;",
            "name": "SQUARED KATAKANA SA"
        },
        {
            "code": "&#x24c2;",
            "name": "CIRCLED LATIN CAPITAL LETTER M"
        },
        {
            "code": "&#x1f6c2;",
            "name": "PASSPORT CONTROL"
        },
        {
            "code": "&#x1f6c4;",
            "name": "BAGGAGE CLAIM"
        },
        {
            "code": "&#x1f6c5;",
            "name": "LEFT LUGGAGE"
        },
        {
            "code": "&#x1f6c3;",
            "name": "CUSTOMS"
        },
        {
            "code": "&#x1f251;",
            "name": "CIRCLED IDEOGRAPH ACCEPT"
        },
        {
            "code": "&#x3299;",
            "name": "CIRCLED IDEOGRAPH SECRET"
        },
        {
            "code": "&#x3297;",
            "name": "CIRCLED IDEOGRAPH CONGRATULATION"
        },
        {
            "code": "&#x1f191;",
            "name": "SQUARED CL"
        },
        {
            "code": "&#x1f198;",
            "name": "SQUARED SOS"
        },
        {
            "code": "&#x1f194;",
            "name": "SQUARED ID"
        },
        {
            "code": "&#x1f6ab;",
            "name": "NO ENTRY SIGN"
        },
        {
            "code": "&#x1f51e;",
            "name": "NO ONE UNDER EIGHTEEN SYMBOL"
        },
        {
            "code": "&#x1f4f5;",
            "name": "NO MOBILE PHONES"
        },
        {
            "code": "&#x1f6af;",
            "name": "DO NOT LITTER SYMBOL"
        },
        {
            "code": "&#x1f6b1;",
            "name": "NON-POTABLE WATER SYMBOL"
        },
        {
            "code": "&#x1f6b3;",
            "name": "NO BICYCLES"
        },
        {
            "code": "&#x1f6b7;",
            "name": "NO PEDESTRIANS"
        },
        {
            "code": "&#x1f6b8;",
            "name": "CHILDREN CROSSING"
        },
        {
            "code": "&#x26d4;",
            "name": "NO ENTRY"
        },
        {
            "code": "&#x2733;",
            "name": "EIGHT SPOKED ASTERISK"
        },
        {
            "code": "&#x2747;",
            "name": "SPARKLE"
        },
        {
            "code": "&#x274e;",
            "name": "NEGATIVE SQUARED CROSS MARK"
        },
        {
            "code": "&#x2705;",
            "name": "WHITE HEAVY CHECK MARK"
        },
        {
            "code": "&#x2734;",
            "name": "EIGHT POINTED BLACK STAR"
        },
        {
            "code": "&#x1f49f;",
            "name": "HEART DECORATION"
        },
        {
            "code": "&#x1f19a;",
            "name": "SQUARED VS"
        },
        {
            "code": "&#x1f4f3;",
            "name": "VIBRATION MODE"
        },
        {
            "code": "&#x1f4f4;",
            "name": "MOBILE PHONE OFF"
        },
        {
            "code": "&#x1f170;",
            "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER A"
        },
        {
            "code": "&#x1f171;",
            "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER B"
        },
        {
            "code": "&#x1f18e;",
            "name": "NEGATIVE SQUARED AB"
        },
        {
            "code": "&#x1f17e;",
            "name": "NEGATIVE SQUARED LATIN CAPITAL LETTER O"
        },
        {
            "code": "&#x1f4a0;",
            "name": "DIAMOND SHAPE WITH A DOT INSIDE"
        },
        {
            "code": "&#x27bf;",
            "name": "DOUBLE CURLY LOOP"
        },
        {
            "code": "&#x267b;",
            "name": "BLACK UNIVERSAL RECYCLING SYMBOL"
        },
        {
            "code": "&#x2648;",
            "name": "ARIES"
        },
        {
            "code": "&#x2649;",
            "name": "TAURUS"
        },
        {
            "code": "&#x264a;",
            "name": "GEMINI"
        },
        {
            "code": "&#x264b;",
            "name": "CANCER"
        },
        {
            "code": "&#x264c;",
            "name": "LEO"
        },
        {
            "code": "&#x264d;",
            "name": "VIRGO"
        },
        {
            "code": "&#x264e;",
            "name": "LIBRA"
        },
        {
            "code": "&#x264f;",
            "name": "SCORPIUS"
        },
        {
            "code": "&#x2650;",
            "name": "SAGITTARIUS"
        },
        {
            "code": "&#x2651;",
            "name": "CAPRICORN"
        },
        {
            "code": "&#x2652;",
            "name": "AQUARIUS"
        },
        {
            "code": "&#x2653;",
            "name": "PISCES"
        },
        {
            "code": "&#x26ce;",
            "name": "OPHIUCHUS"
        },
        {
            "code": "&#x1f52f;",
            "name": "SIX POINTED STAR WITH MIDDLE DOT"
        },
        {
            "code": "&#x1f3e7;",
            "name": "AUTOMATED TELLER MACHINE"
        },
        {
            "code": "&#x1f4b9;",
            "name": "CHART WITH UPWARDS TREND AND YEN SIGN"
        },
        {
            "code": "&#x1f4b2;",
            "name": "HEAVY DOLLAR SIGN"
        },
        {
            "code": "&#x1f4b1;",
            "name": "CURRENCY EXCHANGE"
        },
        {
            "code": "&#xa9;",
            "name": "COPYRIGHT SIGN"
        },
        {
            "code": "&#xae;",
            "name": "REGISTERED SIGN"
        },
        {
            "code": "&#x2122;",
            "name": "TRADE MARK SIGN"
        },
        {
            "code": "&#x274c;",
            "name": "CROSS MARK"
        },
        {
            "code": "&#x203c;",
            "name": "DOUBLE EXCLAMATION MARK"
        },
        {
            "code": "&#x2049;",
            "name": "EXCLAMATION QUESTION MARK"
        },
        {
            "code": "&#x2757;",
            "name": "HEAVY EXCLAMATION MARK SYMBOL"
        },
        {
            "code": "&#x2753;",
            "name": "BLACK QUESTION MARK ORNAMENT"
        },
        {
            "code": "&#x2755;",
            "name": "WHITE EXCLAMATION MARK ORNAMENT"
        },
        {
            "code": "&#x2754;",
            "name": "WHITE QUESTION MARK ORNAMENT"
        },
        {
            "code": "&#x2b55;",
            "name": "HEAVY LARGE CIRCLE"
        },
        {
            "code": "&#x1f51d;",
            "name": "TOP WITH UPWARDS ARROW ABOVE"
        },
        {
            "code": "&#x1f51a;",
            "name": "END WITH LEFTWARDS ARROW ABOVE"
        },
        {
            "code": "&#x1f519;",
            "name": "BACK WITH LEFTWARDS ARROW ABOVE"
        },
        {
            "code": "&#x1f51b;",
            "name": "ON WITH EXCLAMATION MARK WITH LEFT RIGHT ARROW ABOVE"
        },
        {
            "code": "&#x1f51c;",
            "name": "SOON WITH RIGHTWARDS ARROW ABOVE"
        },
        {
            "code": "&#x1f503;",
            "name": "CLOCKWISE DOWNWARDS AND UPWARDS OPEN CIRCLE ARROWS"
        },
        {
            "code": "&#x1f55b;",
            "name": "CLOCK FACE TWELVE OCLOCK"
        },
        {
            "code": "&#x1f567;",
            "name": "CLOCK FACE TWELVE-THIRTY"
        },
        {
            "code": "&#x1f550;",
            "name": "CLOCK FACE ONE OCLOCK"
        },
        {
            "code": "&#x1f55c;",
            "name": "CLOCK FACE ONE-THIRTY"
        },
        {
            "code": "&#x1f551;",
            "name": "CLOCK FACE TWO OCLOCK"
        },
        {
            "code": "&#x1f55d;",
            "name": "CLOCK FACE TWO-THIRTY"
        },
        {
            "code": "&#x1f552;",
            "name": "CLOCK FACE THREE OCLOCK"
        },
        {
            "code": "&#x1f55e;",
            "name": "CLOCK FACE THREE-THIRTY"
        },
        {
            "code": "&#x1f553;",
            "name": "CLOCK FACE FOUR OCLOCK"
        },
        {
            "code": "&#x1f55f;",
            "name": "CLOCK FACE FOUR-THIRTY"
        },
        {
            "code": "&#x1f554;",
            "name": "CLOCK FACE FIVE OCLOCK"
        },
        {
            "code": "&#x1f560;",
            "name": "CLOCK FACE FIVE-THIRTY"
        },
        {
            "code": "&#x1f555;",
            "name": "CLOCK FACE SIX OCLOCK"
        },
        {
            "code": "&#x1f556;",
            "name": "CLOCK FACE SEVEN OCLOCK"
        },
        {
            "code": "&#x1f557;",
            "name": "CLOCK FACE EIGHT OCLOCK"
        },
        {
            "code": "&#x1f558;",
            "name": "CLOCK FACE NINE OCLOCK"
        },
        {
            "code": "&#x1f559;",
            "name": "CLOCK FACE TEN OCLOCK"
        },
        {
            "code": "&#x1f55a;",
            "name": "CLOCK FACE ELEVEN OCLOCK"
        },
        {
            "code": "&#x1f561;",
            "name": "CLOCK FACE SIX-THIRTY"
        },
        {
            "code": "&#x1f562;",
            "name": "CLOCK FACE SEVEN-THIRTY"
        },
        {
            "code": "&#x1f563;",
            "name": "CLOCK FACE EIGHT-THIRTY"
        },
        {
            "code": "&#x1f564;",
            "name": "CLOCK FACE NINE-THIRTY"
        },
        {
            "code": "&#x1f565;",
            "name": "CLOCK FACE TEN-THIRTY"
        },
        {
            "code": "&#x1f566;",
            "name": "CLOCK FACE ELEVEN-THIRTY"
        },
        {
            "code": "&#x2716;",
            "name": "HEAVY MULTIPLICATION X"
        },
        {
            "code": "&#x2795;",
            "name": "HEAVY PLUS SIGN"
        },
        {
            "code": "&#x2796;",
            "name": "HEAVY MINUS SIGN"
        },
        {
            "code": "&#x2797;",
            "name": "HEAVY DIVISION SIGN"
        },
        {
            "code": "&#x2660;",
            "name": "BLACK SPADE SUIT"
        },
        {
            "code": "&#x2665;",
            "name": "BLACK HEART SUIT"
        },
        {
            "code": "&#x2663;",
            "name": "BLACK CLUB SUIT"
        },
        {
            "code": "&#x2666;",
            "name": "BLACK DIAMOND SUIT"
        },
        {
            "code": "&#x1f4ae;",
            "name": "WHITE FLOWER"
        },
        {
            "code": "&#x1f4af;",
            "name": "HUNDRED POINTS SYMBOL"
        },
        {
            "code": "&#x2714;",
            "name": "HEAVY CHECK MARK"
        },
        {
            "code": "&#x2611;",
            "name": "BALLOT BOX WITH CHECK"
        },
        {
            "code": "&#x1f518;",
            "name": "RADIO BUTTON"
        },
        {
            "code": "&#x1f517;",
            "name": "LINK SYMBOL"
        },
        {
            "code": "&#x27b0;",
            "name": "CURLY LOOP"
        },
        {
            "code": "&#x3030;",
            "name": "WAVY DASH"
        },
        {
            "code": "&#x303d;",
            "name": "PART ALTERNATION MARK"
        },
        {
            "code": "&#x1f531;",
            "name": "TRIDENT EMBLEM"
        },
        {
            "code": "&#x25fc;",
            "name": "BLACK MEDIUM SQUARE"
        },
        {
            "code": "&#x25fb;",
            "name": "WHITE MEDIUM SQUARE"
        },
        {
            "code": "&#x25fe;",
            "name": "BLACK MEDIUM SMALL SQUARE"
        },
        {
            "code": "&#x25fd;",
            "name": "WHITE MEDIUM SMALL SQUARE"
        },
        {
            "code": "&#x25aa;",
            "name": "BLACK SMALL SQUARE"
        },
        {
            "code": "&#x25ab;",
            "name": "WHITE SMALL SQUARE"
        },
        {
            "code": "&#x1f53a;",
            "name": "UP-POINTING RED TRIANGLE"
        },
        {
            "code": "&#x1f532;",
            "name": "BLACK SQUARE BUTTON"
        },
        {
            "code": "&#x1f533;",
            "name": "WHITE SQUARE BUTTON"
        },
        {
            "code": "&#x26ab;",
            "name": "MEDIUM BLACK CIRCLE"
        },
        {
            "code": "&#x26aa;",
            "name": "MEDIUM WHITE CIRCLE"
        },
        {
            "code": "&#x1f534;",
            "name": "LARGE RED CIRCLE"
        },
        {
            "code": "&#x1f535;",
            "name": "LARGE BLUE CIRCLE"
        },
        {
            "code": "&#x1f53b;",
            "name": "DOWN-POINTING RED TRIANGLE"
        },
        {
            "code": "&#x2b1c;",
            "name": "WHITE LARGE SQUARE"
        },
        {
            "code": "&#x2b1b;",
            "name": "BLACK LARGE SQUARE"
        },
        {
            "code": "&#x1f536;",
            "name": "LARGE ORANGE DIAMOND"
        },
        {
            "code": "&#x1f537;",
            "name": "LARGE BLUE DIAMOND"
        },
        {
            "code": "&#x1f538;",
            "name": "SMALL ORANGE DIAMOND"
        },
        {
            "code": "&#x1f539;",
            "name": "SMALL BLUE DIAMOND"
        },
        {
            "code": "&#x1f436;",
            "name": "DOG FACE"
        },
        {
            "code": "&#x1f43a;",
            "name": "WOLF FACE"
        },
        {
            "code": "&#x1f431;",
            "name": "CAT FACE"
        },
        {
            "code": "&#x1f42d;",
            "name": "MOUSE FACE"
        },
        {
            "code": "&#x1f439;",
            "name": "HAMSTER FACE"
        },
        {
            "code": "&#x1f430;",
            "name": "RABBIT FACE"
        },
        {
            "code": "&#x1f438;",
            "name": "FROG FACE"
        },
        {
            "code": "&#x1f42f;",
            "name": "TIGER FACE"
        },
        {
            "code": "&#x1f428;",
            "name": "KOALA"
        },
        {
            "code": "&#x1f43b;",
            "name": "BEAR FACE"
        },
        {
            "code": "&#x1f437;",
            "name": "PIG FACE"
        },
        {
            "code": "&#x1f43d;",
            "name": "PIG NOSE"
        },
        {
            "code": "&#x1f42e;",
            "name": "COW FACE"
        },
        {
            "code": "&#x1f417;",
            "name": "BOAR"
        },
        {
            "code": "&#x1f435;",
            "name": "MONKEY FACE"
        },
        {
            "code": "&#x1f412;",
            "name": "MONKEY"
        },
        {
            "code": "&#x1f434;",
            "name": "HORSE FACE"
        },
        {
            "code": "&#x1f411;",
            "name": "SHEEP"
        },
        {
            "code": "&#x1f418;",
            "name": "ELEPHANT"
        },
        {
            "code": "&#x1f43c;",
            "name": "PANDA FACE"
        },
        {
            "code": "&#x1f427;",
            "name": "PENGUIN"
        },
        {
            "code": "&#x1f426;",
            "name": "BIRD"
        },
        {
            "code": "&#x1f424;",
            "name": "BABY CHICK"
        },
        {
            "code": "&#x1f425;",
            "name": "FRONT-FACING BABY CHICK"
        },
        {
            "code": "&#x1f423;",
            "name": "HATCHING CHICK"
        },
        {
            "code": "&#x1f414;",
            "name": "CHICKEN"
        },
        {
            "code": "&#x1f40d;",
            "name": "SNAKE"
        },
        {
            "code": "&#x1f422;",
            "name": "TURTLE"
        },
        {
            "code": "&#x1f41b;",
            "name": "BUG"
        },
        {
            "code": "&#x1f41d;",
            "name": "HONEYBEE"
        },
        {
            "code": "&#x1f41c;",
            "name": "ANT"
        },
        {
            "code": "&#x1f41e;",
            "name": "LADY BEETLE"
        },
        {
            "code": "&#x1f40c;",
            "name": "SNAIL"
        },
        {
            "code": "&#x1f419;",
            "name": "OCTOPUS"
        },
        {
            "code": "&#x1f41a;",
            "name": "SPIRAL SHELL"
        },
        {
            "code": "&#x1f420;",
            "name": "TROPICAL FISH"
        },
        {
            "code": "&#x1f41f;",
            "name": "FISH"
        },
        {
            "code": "&#x1f42c;",
            "name": "DOLPHIN"
        },
        {
            "code": "&#x1f433;",
            "name": "SPOUTING WHALE"
        },
        {
            "code": "&#x1f40b;",
            "name": "WHALE"
        },
        {
            "code": "&#x1f404;",
            "name": "COW"
        },
        {
            "code": "&#x1f40f;",
            "name": "RAM"
        },
        {
            "code": "&#x1f400;",
            "name": "RAT"
        },
        {
            "code": "&#x1f403;",
            "name": "WATER BUFFALO"
        },
        {
            "code": "&#x1f405;",
            "name": "TIGER"
        },
        {
            "code": "&#x1f407;",
            "name": "RABBIT"
        },
        {
            "code": "&#x1f409;",
            "name": "DRAGON"
        },
        {
            "code": "&#x1f40e;",
            "name": "HORSE"
        },
        {
            "code": "&#x1f410;",
            "name": "GOAT"
        },
        {
            "code": "&#x1f413;",
            "name": "ROOSTER"
        },
        {
            "code": "&#x1f415;",
            "name": "DOG"
        },
        {
            "code": "&#x1f416;",
            "name": "PIG"
        },
        {
            "code": "&#x1f401;",
            "name": "MOUSE"
        },
        {
            "code": "&#x1f402;",
            "name": "OX"
        },
        {
            "code": "&#x1f432;",
            "name": "DRAGON FACE"
        },
        {
            "code": "&#x1f421;",
            "name": "BLOWFISH"
        },
        {
            "code": "&#x1f40a;",
            "name": "CROCODILE"
        },
        {
            "code": "&#x1f42b;",
            "name": "BACTRIAN CAMEL"
        },
        {
            "code": "&#x1f42a;",
            "name": "DROMEDARY CAMEL"
        },
        {
            "code": "&#x1f406;",
            "name": "LEOPARD"
        },
        {
            "code": "&#x1f408;",
            "name": "CAT"
        },
        {
            "code": "&#x1f429;",
            "name": "POODLE"
        },
        {
            "code": "&#x1f43e;",
            "name": "PAW PRINTS"
        },
        {
            "code": "&#x1f490;",
            "name": "BOUQUET"
        },
        {
            "code": "&#x1f338;",
            "name": "CHERRY BLOSSOM"
        },
        {
            "code": "&#x1f337;",
            "name": "TULIP"
        },
        {
            "code": "&#x1f340;",
            "name": "FOUR LEAF CLOVER"
        },
        {
            "code": "&#x1f339;",
            "name": "ROSE"
        },
        {
            "code": "&#x1f33b;",
            "name": "SUNFLOWER"
        },
        {
            "code": "&#x1f33a;",
            "name": "HIBISCUS"
        },
        {
            "code": "&#x1f341;",
            "name": "MAPLE LEAF"
        },
        {
            "code": "&#x1f343;",
            "name": "LEAF FLUTTERING IN WIND"
        },
        {
            "code": "&#x1f342;",
            "name": "FALLEN LEAF"
        },
        {
            "code": "&#x1f33f;",
            "name": "HERB"
        },
        {
            "code": "&#x1f33e;",
            "name": "EAR OF RICE"
        },
        {
            "code": "&#x1f344;",
            "name": "MUSHROOM"
        },
        {
            "code": "&#x1f335;",
            "name": "CACTUS"
        },
        {
            "code": "&#x1f334;",
            "name": "PALM TREE"
        },
        {
            "code": "&#x1f332;",
            "name": "EVERGREEN TREE"
        },
        {
            "code": "&#x1f333;",
            "name": "DECIDUOUS TREE"
        },
        {
            "code": "&#x1f330;",
            "name": "CHESTNUT"
        },
        {
            "code": "&#x1f331;",
            "name": "SEEDLING"
        },
        {
            "code": "&#x1f33c;",
            "name": "BLOSSOM"
        },
        {
            "code": "&#x1f310;",
            "name": "GLOBE WITH MERIDIANS"
        },
        {
            "code": "&#x1f31e;",
            "name": "SUN WITH FACE"
        },
        {
            "code": "&#x1f31d;",
            "name": "FULL MOON WITH FACE"
        },
        {
            "code": "&#x1f31a;",
            "name": "NEW MOON WITH FACE"
        },
        {
            "code": "&#x1f311;",
            "name": "NEW MOON SYMBOL"
        },
        {
            "code": "&#x1f312;",
            "name": "WAXING CRESCENT MOON SYMBOL"
        },
        {
            "code": "&#x1f313;",
            "name": "FIRST QUARTER MOON SYMBOL"
        },
        {
            "code": "&#x1f314;",
            "name": "WAXING GIBBOUS MOON SYMBOL"
        },
        {
            "code": "&#x1f315;",
            "name": "FULL MOON SYMBOL"
        },
        {
            "code": "&#x1f316;",
            "name": "WANING GIBBOUS MOON SYMBOL"
        },
        {
            "code": "&#x1f317;",
            "name": "LAST QUARTER MOON SYMBOL"
        },
        {
            "code": "&#x1f318;",
            "name": "WANING CRESCENT MOON SYMBOL"
        },
        {
            "code": "&#x1f31c;",
            "name": "LAST QUARTER MOON WITH FACE"
        },
        {
            "code": "&#x1f31b;",
            "name": "FIRST QUARTER MOON WITH FACE"
        },
        {
            "code": "&#x1f319;",
            "name": "CRESCENT MOON"
        },
        {
            "code": "&#x1f30d;",
            "name": "EARTH GLOBE EUROPE-AFRICA"
        },
        {
            "code": "&#x1f30e;",
            "name": "EARTH GLOBE AMERICAS"
        },
        {
            "code": "&#x1f30f;",
            "name": "EARTH GLOBE ASIA-AUSTRALIA"
        },
        {
            "code": "&#x1f30b;",
            "name": "VOLCANO"
        },
        {
            "code": "&#x1f30c;",
            "name": "MILKY WAY"
        },
        {
            "code": "&#x1f320;",
            "name": "SHOOTING STAR"
        },
        {
            "code": "&#x2b50;",
            "name": "WHITE MEDIUM STAR"
        },
        {
            "code": "&#x2600;",
            "name": "BLACK SUN WITH RAYS"
        },
        {
            "code": "&#x26c5;",
            "name": "SUN BEHIND CLOUD"
        },
        {
            "code": "&#x2601;",
            "name": "CLOUD"
        },
        {
            "code": "&#x26a1;",
            "name": "HIGH VOLTAGE SIGN"
        },
        {
            "code": "&#x2614;",
            "name": "UMBRELLA WITH RAIN DROPS"
        },
        {
            "code": "&#x2744;",
            "name": "SNOWFLAKE"
        },
        {
            "code": "&#x26c4;",
            "name": "SNOWMAN WITHOUT SNOW"
        },
        {
            "code": "&#x1f300;",
            "name": "CYCLONE"
        },
        {
            "code": "&#x1f301;",
            "name": "FOGGY"
        },
        {
            "code": "&#x1f308;",
            "name": "RAINBOW"
        },
        {
            "code": "&#x1f30a;",
            "name": "WATER WAVE"
        },
        {
            "code": "&#x1f38d;",
            "name": "PINE DECORATION"
        },
        {
            "code": "&#x1f49d;",
            "name": "HEART WITH RIBBON"
        },
        {
            "code": "&#x1f38e;",
            "name": "JAPANESE DOLLS"
        },
        {
            "code": "&#x1f392;",
            "name": "SCHOOL SATCHEL"
        },
        {
            "code": "&#x1f393;",
            "name": "GRADUATION CAP"
        },
        {
            "code": "&#x1f38f;",
            "name": "CARP STREAMER"
        },
        {
            "code": "&#x1f386;",
            "name": "FIREWORKS"
        },
        {
            "code": "&#x1f387;",
            "name": "FIREWORK SPARKLER"
        },
        {
            "code": "&#x1f390;",
            "name": "WIND CHIME"
        },
        {
            "code": "&#x1f391;",
            "name": "MOON VIEWING CEREMONY"
        },
        {
            "code": "&#x1f383;",
            "name": "JACK-O-LANTERN"
        },
        {
            "code": "&#x1f47b;",
            "name": "GHOST"
        },
        {
            "code": "&#x1f385;",
            "name": "FATHER CHRISTMAS"
        },
        {
            "code": "&#x1f384;",
            "name": "CHRISTMAS TREE"
        },
        {
            "code": "&#x1f381;",
            "name": "WRAPPED PRESENT"
        },
        {
            "code": "&#x1f38b;",
            "name": "TANABATA TREE"
        },
        {
            "code": "&#x1f389;",
            "name": "PARTY POPPER"
        },
        {
            "code": "&#x1f38a;",
            "name": "CONFETTI BALL"
        },
        {
            "code": "&#x1f388;",
            "name": "BALLOON"
        },
        {
            "code": "&#x1f38c;",
            "name": "CROSSED FLAGS"
        },
        {
            "code": "&#x1f52e;",
            "name": "CRYSTAL BALL"
        },
        {
            "code": "&#x1f3a5;",
            "name": "MOVIE CAMERA"
        },
        {
            "code": "&#x1f4f7;",
            "name": "CAMERA"
        },
        {
            "code": "&#x1f4f9;",
            "name": "VIDEO CAMERA"
        },
        {
            "code": "&#x1f4fc;",
            "name": "VIDEOCASSETTE"
        },
        {
            "code": "&#x1f4bf;",
            "name": "OPTICAL DISC"
        },
        {
            "code": "&#x1f4c0;",
            "name": "DVD"
        },
        {
            "code": "&#x1f4bd;",
            "name": "MINIDISC"
        },
        {
            "code": "&#x1f4be;",
            "name": "FLOPPY DISK"
        },
        {
            "code": "&#x1f4bb;",
            "name": "PERSONAL COMPUTER"
        },
        {
            "code": "&#x1f4f1;",
            "name": "MOBILE PHONE"
        },
        {
            "code": "&#x260e;",
            "name": "BLACK TELEPHONE"
        },
        {
            "code": "&#x1f4de;",
            "name": "TELEPHONE RECEIVER"
        },
        {
            "code": "&#x1f4df;",
            "name": "PAGER"
        },
        {
            "code": "&#x1f4e0;",
            "name": "FAX MACHINE"
        },
        {
            "code": "&#x1f4e1;",
            "name": "SATELLITE ANTENNA"
        },
        {
            "code": "&#x1f4fa;",
            "name": "TELEVISION"
        },
        {
            "code": "&#x1f4fb;",
            "name": "RADIO"
        },
        {
            "code": "&#x1f50a;",
            "name": "SPEAKER WITH THREE SOUND WAVES"
        },
        {
            "code": "&#x1f509;",
            "name": "SPEAKER WITH ONE SOUND WAVE"
        },
        {
            "code": "&#x1f508;",
            "name": "SPEAKER"
        },
        {
            "code": "&#x1f507;",
            "name": "SPEAKER WITH CANCELLATION STROKE"
        },
        {
            "code": "&#x1f514;",
            "name": "BELL"
        },
        {
            "code": "&#x1f515;",
            "name": "BELL WITH CANCELLATION STROKE"
        },
        {
            "code": "&#x1f4e2;",
            "name": "PUBLIC ADDRESS LOUDSPEAKER"
        },
        {
            "code": "&#x1f4e3;",
            "name": "CHEERING MEGAPHONE"
        },
        {
            "code": "&#x23f3;",
            "name": "HOURGLASS WITH FLOWING SAND"
        },
        {
            "code": "&#x231b;",
            "name": "HOURGLASS"
        },
        {
            "code": "&#x23f0;",
            "name": "ALARM CLOCK"
        },
        {
            "code": "&#x231a;",
            "name": "WATCH"
        },
        {
            "code": "&#x1f513;",
            "name": "OPEN LOCK"
        },
        {
            "code": "&#x1f512;",
            "name": "LOCK"
        },
        {
            "code": "&#x1f50f;",
            "name": "LOCK WITH INK PEN"
        },
        {
            "code": "&#x1f510;",
            "name": "CLOSED LOCK WITH KEY"
        },
        {
            "code": "&#x1f511;",
            "name": "KEY"
        },
        {
            "code": "&#x1f50e;",
            "name": "RIGHT-POINTING MAGNIFYING GLASS"
        },
        {
            "code": "&#x1f4a1;",
            "name": "ELECTRIC LIGHT BULB"
        },
        {
            "code": "&#x1f526;",
            "name": "ELECTRIC TORCH"
        },
        {
            "code": "&#x1f506;",
            "name": "HIGH BRIGHTNESS SYMBOL"
        },
        {
            "code": "&#x1f505;",
            "name": "LOW BRIGHTNESS SYMBOL"
        },
        {
            "code": "&#x1f50c;",
            "name": "ELECTRIC PLUG"
        },
        {
            "code": "&#x1f50b;",
            "name": "BATTERY"
        },
        {
            "code": "&#x1f50d;",
            "name": "LEFT-POINTING MAGNIFYING GLASS"
        },
        {
            "code": "&#x1f6c1;",
            "name": "BATHTUB"
        },
        {
            "code": "&#x1f6c0;",
            "name": "BATH"
        },
        {
            "code": "&#x1f6bf;",
            "name": "SHOWER"
        },
        {
            "code": "&#x1f6bd;",
            "name": "TOILET"
        },
        {
            "code": "&#x1f527;",
            "name": "WRENCH"
        },
        {
            "code": "&#x1f529;",
            "name": "NUT AND BOLT"
        },
        {
            "code": "&#x1f528;",
            "name": "HAMMER"
        },
        {
            "code": "&#x1f6aa;",
            "name": "DOOR"
        },
        {
            "code": "&#x1f6ac;",
            "name": "SMOKING SYMBOL"
        },
        {
            "code": "&#x1f4a3;",
            "name": "BOMB"
        },
        {
            "code": "&#x1f52b;",
            "name": "PISTOL"
        },
        {
            "code": "&#x1f52a;",
            "name": "HOCHO"
        },
        {
            "code": "&#x1f48a;",
            "name": "PILL"
        },
        {
            "code": "&#x1f489;",
            "name": "SYRINGE"
        },
        {
            "code": "&#x1f4b0;",
            "name": "MONEY BAG"
        },
        {
            "code": "&#x1f4b4;",
            "name": "BANKNOTE WITH YEN SIGN"
        },
        {
            "code": "&#x1f4b5;",
            "name": "BANKNOTE WITH DOLLAR SIGN"
        },
        {
            "code": "&#x1f4b7;",
            "name": "BANKNOTE WITH POUND SIGN"
        },
        {
            "code": "&#x1f4b6;",
            "name": "BANKNOTE WITH EURO SIGN"
        },
        {
            "code": "&#x1f4b3;",
            "name": "CREDIT CARD"
        },
        {
            "code": "&#x1f4b8;",
            "name": "MONEY WITH WINGS"
        },
        {
            "code": "&#x1f4f2;",
            "name": "MOBILE PHONE WITH RIGHTWARDS ARROW AT LEFT"
        },
        {
            "code": "&#x1f4e7;",
            "name": "E-MAIL SYMBOL"
        },
        {
            "code": "&#x1f4e5;",
            "name": "INBOX TRAY"
        },
        {
            "code": "&#x1f4e4;",
            "name": "OUTBOX TRAY"
        },
        {
            "code": "&#x2709;",
            "name": "ENVELOPE"
        },
        {
            "code": "&#x1f4e9;",
            "name": "ENVELOPE WITH DOWNWARDS ARROW ABOVE"
        },
        {
            "code": "&#x1f4e8;",
            "name": "INCOMING ENVELOPE"
        },
        {
            "code": "&#x1f4ef;",
            "name": "POSTAL HORN"
        },
        {
            "code": "&#x1f4eb;",
            "name": "CLOSED MAILBOX WITH RAISED FLAG"
        },
        {
            "code": "&#x1f4ea;",
            "name": "CLOSED MAILBOX WITH LOWERED FLAG"
        },
        {
            "code": "&#x1f4ec;",
            "name": "OPEN MAILBOX WITH RAISED FLAG"
        },
        {
            "code": "&#x1f4ed;",
            "name": "OPEN MAILBOX WITH LOWERED FLAG"
        },
        {
            "code": "&#x1f4ee;",
            "name": "POSTBOX"
        },
        {
            "code": "&#x1f4e6;",
            "name": "PACKAGE"
        },
        {
            "code": "&#x1f4dd;",
            "name": "MEMO"
        },
        {
            "code": "&#x1f4c4;",
            "name": "PAGE FACING UP"
        },
        {
            "code": "&#x1f4c3;",
            "name": "PAGE WITH CURL"
        },
        {
            "code": "&#x1f4d1;",
            "name": "BOOKMARK TABS"
        },
        {
            "code": "&#x1f4ca;",
            "name": "BAR CHART"
        },
        {
            "code": "&#x1f4c8;",
            "name": "CHART WITH UPWARDS TREND"
        },
        {
            "code": "&#x1f4c9;",
            "name": "CHART WITH DOWNWARDS TREND"
        },
        {
            "code": "&#x1f4dc;",
            "name": "SCROLL"
        },
        {
            "code": "&#x1f4cb;",
            "name": "CLIPBOARD"
        },
        {
            "code": "&#x1f4c5;",
            "name": "CALENDAR"
        },
        {
            "code": "&#x1f4c6;",
            "name": "TEAR-OFF CALENDAR"
        },
        {
            "code": "&#x1f4c7;",
            "name": "CARD INDEX"
        },
        {
            "code": "&#x1f4c1;",
            "name": "FILE FOLDER"
        },
        {
            "code": "&#x1f4c2;",
            "name": "OPEN FILE FOLDER"
        },
        {
            "code": "&#x2702;",
            "name": "BLACK SCISSORS"
        },
        {
            "code": "&#x1f4cc;",
            "name": "PUSHPIN"
        },
        {
            "code": "&#x1f4ce;",
            "name": "PAPERCLIP"
        },
        {
            "code": "&#x2712;",
            "name": "BLACK NIB"
        },
        {
            "code": "&#x270f;",
            "name": "PENCIL"
        },
        {
            "code": "&#x1f4cf;",
            "name": "STRAIGHT RULER"
        },
        {
            "code": "&#x1f4d0;",
            "name": "TRIANGULAR RULER"
        },
        {
            "code": "&#x1f4d5;",
            "name": "CLOSED BOOK"
        },
        {
            "code": "&#x1f4d7;",
            "name": "GREEN BOOK"
        },
        {
            "code": "&#x1f4d8;",
            "name": "BLUE BOOK"
        },
        {
            "code": "&#x1f4d9;",
            "name": "ORANGE BOOK"
        },
        {
            "code": "&#x1f4d3;",
            "name": "NOTEBOOK"
        },
        {
            "code": "&#x1f4d4;",
            "name": "NOTEBOOK WITH DECORATIVE COVER"
        },
        {
            "code": "&#x1f4d2;",
            "name": "LEDGER"
        },
        {
            "code": "&#x1f4da;",
            "name": "BOOKS"
        },
        {
            "code": "&#x1f4d6;",
            "name": "OPEN BOOK"
        },
        {
            "code": "&#x1f516;",
            "name": "BOOKMARK"
        },
        {
            "code": "&#x1f4db;",
            "name": "NAME BADGE"
        },
        {
            "code": "&#x1f52c;",
            "name": "MICROSCOPE"
        },
        {
            "code": "&#x1f52d;",
            "name": "TELESCOPE"
        },
        {
            "code": "&#x1f4f0;",
            "name": "NEWSPAPER"
        },
        {
            "code": "&#x1f3a8;",
            "name": "ARTIST PALETTE"
        },
        {
            "code": "&#x1f3ac;",
            "name": "CLAPPER BOARD"
        },
        {
            "code": "&#x1f3a4;",
            "name": "MICROPHONE"
        },
        {
            "code": "&#x1f3a7;",
            "name": "HEADPHONE"
        },
        {
            "code": "&#x1f3bc;",
            "name": "MUSICAL SCORE"
        },
        {
            "code": "&#x1f3b5;",
            "name": "MUSICAL NOTE"
        },
        {
            "code": "&#x1f3b6;",
            "name": "MULTIPLE MUSICAL NOTES"
        },
        {
            "code": "&#x1f3b9;",
            "name": "MUSICAL KEYBOARD"
        },
        {
            "code": "&#x1f3bb;",
            "name": "VIOLIN"
        },
        {
            "code": "&#x1f3ba;",
            "name": "TRUMPET"
        },
        {
            "code": "&#x1f3b7;",
            "name": "SAXOPHONE"
        },
        {
            "code": "&#x1f3b8;",
            "name": "GUITAR"
        },
        {
            "code": "&#x1f47e;",
            "name": "ALIEN MONSTER"
        },
        {
            "code": "&#x1f3ae;",
            "name": "VIDEO GAME"
        },
        {
            "code": "&#x1f0cf;",
            "name": "PLAYING CARD BLACK JOKER"
        },
        {
            "code": "&#x1f3b4;",
            "name": "FLOWER PLAYING CARDS"
        },
        {
            "code": "&#x1f004;",
            "name": "MAHJONG TILE RED DRAGON"
        },
        {
            "code": "&#x1f3b2;",
            "name": "GAME DIE"
        },
        {
            "code": "&#x1f3af;",
            "name": "DIRECT HIT"
        },
        {
            "code": "&#x1f3c8;",
            "name": "AMERICAN FOOTBALL"
        },
        {
            "code": "&#x1f3c0;",
            "name": "BASKETBALL AND HOOP"
        },
        {
            "code": "&#x26bd;",
            "name": "SOCCER BALL"
        },
        {
            "code": "&#x26be;",
            "name": "BASEBALL"
        },
        {
            "code": "&#x1f3be;",
            "name": "TENNIS RACQUET AND BALL"
        },
        {
            "code": "&#x1f3b1;",
            "name": "BILLIARDS"
        },
        {
            "code": "&#x1f3c9;",
            "name": "RUGBY FOOTBALL"
        },
        {
            "code": "&#x1f3b3;",
            "name": "BOWLING"
        },
        {
            "code": "&#x26f3;",
            "name": "FLAG IN HOLE"
        },
        {
            "code": "&#x1f6b5;",
            "name": "MOUNTAIN BICYCLIST"
        },
        {
            "code": "&#x1f6b4;",
            "name": "BICYCLIST"
        },
        {
            "code": "&#x1f3c1;",
            "name": "CHEQUERED FLAG"
        },
        {
            "code": "&#x1f3c7;",
            "name": "HORSE RACING"
        },
        {
            "code": "&#x1f3c6;",
            "name": "TROPHY"
        },
        {
            "code": "&#x1f3bf;",
            "name": "SKI AND SKI BOOT"
        },
        {
            "code": "&#x1f3c2;",
            "name": "SNOWBOARDER"
        },
        {
            "code": "&#x1f3ca;",
            "name": "SWIMMER"
        },
        {
            "code": "&#x1f3c4;",
            "name": "SURFER"
        },
        {
            "code": "&#x1f3a3;",
            "name": "FISHING POLE AND FISH"
        },
        {
            "code": "&#x2615;",
            "name": "HOT BEVERAGE"
        },
        {
            "code": "&#x1f375;",
            "name": "TEACUP WITHOUT HANDLE"
        },
        {
            "code": "&#x1f376;",
            "name": "SAKE BOTTLE AND CUP"
        },
        {
            "code": "&#x1f37c;",
            "name": "BABY BOTTLE"
        },
        {
            "code": "&#x1f37a;",
            "name": "BEER MUG"
        },
        {
            "code": "&#x1f37b;",
            "name": "CLINKING BEER MUGS"
        },
        {
            "code": "&#x1f378;",
            "name": "COCKTAIL GLASS"
        },
        {
            "code": "&#x1f379;",
            "name": "TROPICAL DRINK"
        },
        {
            "code": "&#x1f377;",
            "name": "WINE GLASS"
        },
        {
            "code": "&#x1f374;",
            "name": "FORK AND KNIFE"
        },
        {
            "code": "&#x1f355;",
            "name": "SLICE OF PIZZA"
        },
        {
            "code": "&#x1f354;",
            "name": "HAMBURGER"
        },
        {
            "code": "&#x1f35f;",
            "name": "FRENCH FRIES"
        },
        {
            "code": "&#x1f357;",
            "name": "POULTRY LEG"
        },
        {
            "code": "&#x1f356;",
            "name": "MEAT ON BONE"
        },
        {
            "code": "&#x1f35d;",
            "name": "SPAGHETTI"
        },
        {
            "code": "&#x1f35b;",
            "name": "CURRY AND RICE"
        },
        {
            "code": "&#x1f364;",
            "name": "FRIED SHRIMP"
        },
        {
            "code": "&#x1f371;",
            "name": "BENTO BOX"
        },
        {
            "code": "&#x1f363;",
            "name": "SUSHI"
        },
        {
            "code": "&#x1f365;",
            "name": "FISH CAKE WITH SWIRL DESIGN"
        },
        {
            "code": "&#x1f359;",
            "name": "RICE BALL"
        },
        {
            "code": "&#x1f358;",
            "name": "RICE CRACKER"
        },
        {
            "code": "&#x1f35a;",
            "name": "COOKED RICE"
        },
        {
            "code": "&#x1f35c;",
            "name": "STEAMING BOWL"
        },
        {
            "code": "&#x1f372;",
            "name": "POT OF FOOD"
        },
        {
            "code": "&#x1f362;",
            "name": "ODEN"
        },
        {
            "code": "&#x1f361;",
            "name": "DANGO"
        },
        {
            "code": "&#x1f373;",
            "name": "COOKING"
        },
        {
            "code": "&#x1f35e;",
            "name": "BREAD"
        },
        {
            "code": "&#x1f369;",
            "name": "DOUGHNUT"
        },
        {
            "code": "&#x1f36e;",
            "name": "CUSTARD"
        },
        {
            "code": "&#x1f366;",
            "name": "SOFT ICE CREAM"
        },
        {
            "code": "&#x1f368;",
            "name": "ICE CREAM"
        },
        {
            "code": "&#x1f367;",
            "name": "SHAVED ICE"
        },
        {
            "code": "&#x1f382;",
            "name": "BIRTHDAY CAKE"
        },
        {
            "code": "&#x1f370;",
            "name": "SHORTCAKE"
        },
        {
            "code": "&#x1f36a;",
            "name": "COOKIE"
        },
        {
            "code": "&#x1f36b;",
            "name": "CHOCOLATE BAR"
        },
        {
            "code": "&#x1f36c;",
            "name": "CANDY"
        },
        {
            "code": "&#x1f36d;",
            "name": "LOLLIPOP"
        },
        {
            "code": "&#x1f36f;",
            "name": "HONEY POT"
        },
        {
            "code": "&#x1f34e;",
            "name": "RED APPLE"
        },
        {
            "code": "&#x1f34f;",
            "name": "GREEN APPLE"
        },
        {
            "code": "&#x1f34a;",
            "name": "TANGERINE"
        },
        {
            "code": "&#x1f34b;",
            "name": "LEMON"
        },
        {
            "code": "&#x1f352;",
            "name": "CHERRIES"
        },
        {
            "code": "&#x1f347;",
            "name": "GRAPES"
        },
        {
            "code": "&#x1f349;",
            "name": "WATERMELON"
        },
        {
            "code": "&#x1f353;",
            "name": "STRAWBERRY"
        },
        {
            "code": "&#x1f351;",
            "name": "PEACH"
        },
        {
            "code": "&#x1f348;",
            "name": "MELON"
        },
        {
            "code": "&#x1f34c;",
            "name": "BANANA"
        },
        {
            "code": "&#x1f350;",
            "name": "PEAR"
        },
        {
            "code": "&#x1f34d;",
            "name": "PINEAPPLE"
        },
        {
            "code": "&#x1f360;",
            "name": "ROASTED SWEET POTATO"
        },
        {
            "code": "&#x1f346;",
            "name": "AUBERGINE"
        },
        {
            "code": "&#x1f345;",
            "name": "TOMATO"
        },
        {
            "code": "&#x1f33d;",
            "name": "EAR OF MAIZE"
        },
        {
            "code": "&#x1f3e0;",
            "name": "HOUSE BUILDING"
        },
        {
            "code": "&#x1f3e1;",
            "name": "HOUSE WITH GARDEN"
        },
        {
            "code": "&#x1f3eb;",
            "name": "SCHOOL"
        },
        {
            "code": "&#x1f3e2;",
            "name": "OFFICE BUILDING"
        },
        {
            "code": "&#x1f3e3;",
            "name": "JAPANESE POST OFFICE"
        },
        {
            "code": "&#x1f3e5;",
            "name": "HOSPITAL"
        },
        {
            "code": "&#x1f3e6;",
            "name": "BANK"
        },
        {
            "code": "&#x1f3ea;",
            "name": "CONVENIENCE STORE"
        },
        {
            "code": "&#x1f3e9;",
            "name": "LOVE HOTEL"
        },
        {
            "code": "&#x1f3e8;",
            "name": "HOTEL"
        },
        {
            "code": "&#x1f492;",
            "name": "WEDDING"
        },
        {
            "code": "&#x26ea;",
            "name": "CHURCH"
        },
        {
            "code": "&#x1f3ec;",
            "name": "DEPARTMENT STORE"
        },
        {
            "code": "&#x1f3e4;",
            "name": "EUROPEAN POST OFFICE"
        },
        {
            "code": "&#x1f307;",
            "name": "SUNSET OVER BUILDINGS"
        },
        {
            "code": "&#x1f306;",
            "name": "CITYSCAPE AT DUSK"
        },
        {
            "code": "&#x1f3ef;",
            "name": "JAPANESE CASTLE"
        },
        {
            "code": "&#x1f3f0;",
            "name": "EUROPEAN CASTLE"
        },
        {
            "code": "&#x26fa;",
            "name": "TENT"
        },
        {
            "code": "&#x1f3ed;",
            "name": "FACTORY"
        },
        {
            "code": "&#x1f5fc;",
            "name": "TOKYO TOWER"
        },
        {
            "code": "&#x1f5fe;",
            "name": "SILHOUETTE OF JAPAN"
        },
        {
            "code": "&#x1f5fb;",
            "name": "MOUNT FUJI"
        },
        {
            "code": "&#x1f304;",
            "name": "SUNRISE OVER MOUNTAINS"
        },
        {
            "code": "&#x1f305;",
            "name": "SUNRISE"
        },
        {
            "code": "&#x1f303;",
            "name": "NIGHT WITH STARS"
        },
        {
            "code": "&#x1f5fd;",
            "name": "STATUE OF LIBERTY"
        },
        {
            "code": "&#x1f309;",
            "name": "BRIDGE AT NIGHT"
        },
        {
            "code": "&#x1f3a0;",
            "name": "CAROUSEL HORSE"
        },
        {
            "code": "&#x1f3a1;",
            "name": "FERRIS WHEEL"
        },
        {
            "code": "&#x26f2;",
            "name": "FOUNTAIN"
        },
        {
            "code": "&#x1f3a2;",
            "name": "ROLLER COASTER"
        },
        {
            "code": "&#x1f6a2;",
            "name": "SHIP"
        },
        {
            "code": "&#x26f5;",
            "name": "SAILBOAT"
        },
        {
            "code": "&#x1f6a4;",
            "name": "SPEEDBOAT"
        },
        {
            "code": "&#x1f6a3;",
            "name": "ROWBOAT"
        },
        {
            "code": "&#x2693;",
            "name": "ANCHOR"
        },
        {
            "code": "&#x1f680;",
            "name": "ROCKET"
        },
        {
            "code": "&#x2708;",
            "name": "AIRPLANE"
        },
        {
            "code": "&#x1f4ba;",
            "name": "SEAT"
        },
        {
            "code": "&#x1f681;",
            "name": "HELICOPTER"
        },
        {
            "code": "&#x1f682;",
            "name": "STEAM LOCOMOTIVE"
        },
        {
            "code": "&#x1f68a;",
            "name": "TRAM"
        },
        {
            "code": "&#x1f689;",
            "name": "STATION"
        },
        {
            "code": "&#x1f69e;",
            "name": "MOUNTAIN RAILWAY"
        },
        {
            "code": "&#x1f686;",
            "name": "TRAIN"
        },
        {
            "code": "&#x1f684;",
            "name": "HIGH-SPEED TRAIN"
        },
        {
            "code": "&#x1f685;",
            "name": "HIGH-SPEED TRAIN WITH BULLET NOSE"
        },
        {
            "code": "&#x1f688;",
            "name": "LIGHT RAIL"
        },
        {
            "code": "&#x1f687;",
            "name": "METRO"
        },
        {
            "code": "&#x1f69d;",
            "name": "MONORAIL"
        },
        {
            "code": "&#x1f68b;",
            "name": "TRAM CAR"
        },
        {
            "code": "&#x1f683;",
            "name": "RAILWAY CAR"
        },
        {
            "code": "&#x1f68e;",
            "name": "TROLLEYBUS"
        },
        {
            "code": "&#x1f68c;",
            "name": "BUS"
        },
        {
            "code": "&#x1f68d;",
            "name": "ONCOMING BUS"
        },
        {
            "code": "&#x1f699;",
            "name": "RECREATIONAL VEHICLE"
        },
        {
            "code": "&#x1f698;",
            "name": "ONCOMING AUTOMOBILE"
        },
        {
            "code": "&#x1f697;",
            "name": "AUTOMOBILE"
        },
        {
            "code": "&#x1f695;",
            "name": "TAXI"
        },
        {
            "code": "&#x1f696;",
            "name": "ONCOMING TAXI"
        },
        {
            "code": "&#x1f69b;",
            "name": "ARTICULATED LORRY"
        },
        {
            "code": "&#x1f69a;",
            "name": "DELIVERY TRUCK"
        },
        {
            "code": "&#x1f6a8;",
            "name": "POLICE CARS REVOLVING LIGHT"
        },
        {
            "code": "&#x1f693;",
            "name": "POLICE CAR"
        },
        {
            "code": "&#x1f694;",
            "name": "ONCOMING POLICE CAR"
        },
        {
            "code": "&#x1f692;",
            "name": "FIRE ENGINE"
        },
        {
            "code": "&#x1f691;",
            "name": "AMBULANCE"
        },
        {
            "code": "&#x1f690;",
            "name": "MINIBUS"
        },
        {
            "code": "&#x1f6b2;",
            "name": "BICYCLE"
        },
        {
            "code": "&#x1f6a1;",
            "name": "AERIAL TRAMWAY"
        },
        {
            "code": "&#x1f69f;",
            "name": "SUSPENSION RAILWAY"
        },
        {
            "code": "&#x1f6a0;",
            "name": "MOUNTAIN CABLEWAY"
        },
        {
            "code": "&#x1f69c;",
            "name": "TRACTOR"
        },
        {
            "code": "&#x1f488;",
            "name": "BARBER POLE"
        },
        {
            "code": "&#x1f68f;",
            "name": "BUS STOP"
        },
        {
            "code": "&#x1f3ab;",
            "name": "TICKET"
        },
        {
            "code": "&#x1f6a6;",
            "name": "VERTICAL TRAFFIC LIGHT"
        },
        {
            "code": "&#x1f6a5;",
            "name": "HORIZONTAL TRAFFIC LIGHT"
        },
        {
            "code": "&#x26a0;",
            "name": "WARNING SIGN"
        },
        {
            "code": "&#x1f6a7;",
            "name": "CONSTRUCTION SIGN"
        },
        {
            "code": "&#x1f530;",
            "name": "JAPANESE SYMBOL FOR BEGINNER"
        },
        {
            "code": "&#x26fd;",
            "name": "FUEL PUMP"
        },
        {
            "code": "&#x1f3ee;",
            "name": "IZAKAYA LANTERN"
        },
        {
            "code": "&#x1f3b0;",
            "name": "SLOT MACHINE"
        },
        {
            "code": "&#x2668;",
            "name": "HOT SPRINGS"
        },
        {
            "code": "&#x1f5ff;",
            "name": "MOYAI"
        },
        {
            "code": "&#x1f3aa;",
            "name": "CIRCUS TENT"
        },
        {
            "code": "&#x1f3ad;",
            "name": "PERFORMING ARTS"
        },
        {
            "code": "&#x1f4cd;",
            "name": "ROUND PUSHPIN"
        },
        {
            "code": "&#x1f6a9;",
            "name": "TRIANGULAR FLAG ON POST"
        },
        {
            "code": "&#x1f1ef;&#x1f1f5;",
            "name": "REGIONAL INDICATOR SYMBOL LETTERS JP"
        },
        {
            "code": "&#x1f1f0;&#x1f1f7;",
            "name": "REGIONAL INDICATOR SYMBOL LETTERS KR"
        },
        {
            "code": "&#x1f1e9;&#x1f1ea;",
            "name": "REGIONAL INDICATOR SYMBOL LETTERS DE"
        },
        {
            "code": "&#x1f1e8;&#x1f1f3;",
            "name": "REGIONAL INDICATOR SYMBOL LETTERS CN"
        },
        {
            "code": "&#x1f1fa;&#x1f1f8;",
            "name": "REGIONAL INDICATOR SYMBOL LETTERS US"
        },
        {
            "code": "&#x1f1eb;&#x1f1f7;",
            "name": "REGIONAL INDICATOR SYMBOL LETTERS FR"
        },
        {
            "code": "&#x1f1ea;&#x1f1f8;",
            "name": "REGIONAL INDICATOR SYMBOL LETTERS ES"
        },
        {
            "code": "&#x1f1ee;&#x1f1f9;",
            "name": "REGIONAL INDICATOR SYMBOL LETTERS IT"
        },
        {
            "code": "&#x1f1f7;&#x1f1fa;",
            "name": "REGIONAL INDICATOR SYMBOL LETTERS RU"
        },
        {
            "code": "&#x1f1ec;&#x1f1e7;",
            "name": "REGIONAL INDICATOR SYMBOL LETTERS GB"
        },
        {
            "code": "&#x1f604;",
            "name": "SMILING FACE WITH OPEN MOUTH AND SMILING EYES"
        },
        {
            "code": "&#x1f603;",
            "name": "SMILING FACE WITH OPEN MOUTH"
        },
        {
            "code": "&#x1f600;",
            "name": "GRINNING FACE"
        },
        {
            "code": "&#x1f60a;",
            "name": "SMILING FACE WITH SMILING EYES"
        },
        {
            "code": "&#x263a;",
            "name": "WHITE SMILING FACE"
        },
        {
            "code": "&#x1f609;",
            "name": "WINKING FACE"
        },
        {
            "code": "&#x1f60d;",
            "name": "SMILING FACE WITH HEART-SHAPED EYES"
        },
        {
            "code": "&#x1f618;",
            "name": "FACE THROWING A KISS"
        },
        {
            "code": "&#x1f61a;",
            "name": "KISSING FACE WITH CLOSED EYES"
        },
        {
            "code": "&#x1f617;",
            "name": "KISSING FACE"
        },
        {
            "code": "&#x1f619;",
            "name": "KISSING FACE WITH SMILING EYES"
        },
        {
            "code": "&#x1f61c;",
            "name": "FACE WITH STUCK-OUT TONGUE AND WINKING EYE"
        },
        {
            "code": "&#x1f61d;",
            "name": "FACE WITH STUCK-OUT TONGUE AND TIGHTLY-CLOSED EYES"
        },
        {
            "code": "&#x1f61b;",
            "name": "FACE WITH STUCK-OUT TONGUE"
        },
        {
            "code": "&#x1f633;",
            "name": "FLUSHED FACE"
        },
        {
            "code": "&#x1f601;",
            "name": "GRINNING FACE WITH SMILING EYES"
        },
        {
            "code": "&#x1f614;",
            "name": "PENSIVE FACE"
        },
        {
            "code": "&#x1f60c;",
            "name": "RELIEVED FACE"
        },
        {
            "code": "&#x1f612;",
            "name": "UNAMUSED FACE"
        },
        {
            "code": "&#x1f61e;",
            "name": "DISAPPOINTED FACE"
        },
        {
            "code": "&#x1f623;",
            "name": "PERSEVERING FACE"
        },
        {
            "code": "&#x1f622;",
            "name": "CRYING FACE"
        },
        {
            "code": "&#x1f602;",
            "name": "FACE WITH TEARS OF JOY"
        },
        {
            "code": "&#x1f62d;",
            "name": "LOUDLY CRYING FACE"
        },
        {
            "code": "&#x1f62a;",
            "name": "SLEEPY FACE"
        },
        {
            "code": "&#x1f625;",
            "name": "DISAPPOINTED BUT RELIEVED FACE"
        },
        {
            "code": "&#x1f630;",
            "name": "FACE WITH OPEN MOUTH AND COLD SWEAT"
        },
        {
            "code": "&#x1f605;",
            "name": "SMILING FACE WITH OPEN MOUTH AND COLD SWEAT"
        },
        {
            "code": "&#x1f613;",
            "name": "FACE WITH COLD SWEAT"
        },
        {
            "code": "&#x1f629;",
            "name": "WEARY FACE"
        },
        {
            "code": "&#x1f62b;",
            "name": "TIRED FACE"
        },
        {
            "code": "&#x1f628;",
            "name": "FEARFUL FACE"
        },
        {
            "code": "&#x1f631;",
            "name": "FACE SCREAMING IN FEAR"
        },
        {
            "code": "&#x1f620;",
            "name": "ANGRY FACE"
        },
        {
            "code": "&#x1f621;",
            "name": "POUTING FACE"
        },
        {
            "code": "&#x1f624;",
            "name": "FACE WITH LOOK OF TRIUMPH"
        },
        {
            "code": "&#x1f616;",
            "name": "CONFOUNDED FACE"
        },
        {
            "code": "&#x1f606;",
            "name": "SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES"
        },
        {
            "code": "&#x1f60b;",
            "name": "FACE SAVOURING DELICIOUS FOOD"
        },
        {
            "code": "&#x1f637;",
            "name": "FACE WITH MEDICAL MASK"
        },
        {
            "code": "&#x1f60e;",
            "name": "SMILING FACE WITH SUNGLASSES"
        },
        {
            "code": "&#x1f634;",
            "name": "SLEEPING FACE"
        },
        {
            "code": "&#x1f635;",
            "name": "DIZZY FACE"
        },
        {
            "code": "&#x1f632;",
            "name": "ASTONISHED FACE"
        },
        {
            "code": "&#x1f61f;",
            "name": "WORRIED FACE"
        },
        {
            "code": "&#x1f626;",
            "name": "FROWNING FACE WITH OPEN MOUTH"
        },
        {
            "code": "&#x1f627;",
            "name": "ANGUISHED FACE"
        },
        {
            "code": "&#x1f608;",
            "name": "SMILING FACE WITH HORNS"
        },
        {
            "code": "&#x1f47f;",
            "name": "IMP"
        },
        {
            "code": "&#x1f62e;",
            "name": "FACE WITH OPEN MOUTH"
        },
        {
            "code": "&#x1f62c;",
            "name": "GRIMACING FACE"
        },
        {
            "code": "&#x1f610;",
            "name": "NEUTRAL FACE"
        },
        {
            "code": "&#x1f615;",
            "name": "CONFUSED FACE"
        },
        {
            "code": "&#x1f62f;",
            "name": "HUSHED FACE"
        },
        {
            "code": "&#x1f636;",
            "name": "FACE WITHOUT MOUTH"
        },
        {
            "code": "&#x1f607;",
            "name": "SMILING FACE WITH HALO"
        },
        {
            "code": "&#x1f60f;",
            "name": "SMIRKING FACE"
        },
        {
            "code": "&#x1f611;",
            "name": "EXPRESSIONLESS FACE"
        },
        {
            "code": "&#x1f472;",
            "name": "MAN WITH GUA PI MAO"
        },
        {
            "code": "&#x1f473;",
            "name": "MAN WITH TURBAN"
        },
        {
            "code": "&#x1f46e;",
            "name": "POLICE OFFICER"
        },
        {
            "code": "&#x1f477;",
            "name": "CONSTRUCTION WORKER"
        },
        {
            "code": "&#x1f482;",
            "name": "GUARDSMAN"
        },
        {
            "code": "&#x1f476;",
            "name": "BABY"
        },
        {
            "code": "&#x1f466;",
            "name": "BOY"
        },
        {
            "code": "&#x1f467;",
            "name": "GIRL"
        },
        {
            "code": "&#x1f468;",
            "name": "MAN"
        },
        {
            "code": "&#x1f469;",
            "name": "WOMAN"
        },
        {
            "code": "&#x1f474;",
            "name": "OLDER MAN"
        },
        {
            "code": "&#x1f475;",
            "name": "OLDER WOMAN"
        },
        {
            "code": "&#x1f471;",
            "name": "PERSON WITH BLOND HAIR"
        },
        {
            "code": "&#x1f47c;",
            "name": "BABY ANGEL"
        },
        {
            "code": "&#x1f478;",
            "name": "PRINCESS"
        },
        {
            "code": "&#x1f63a;",
            "name": "SMILING CAT FACE WITH OPEN MOUTH"
        },
        {
            "code": "&#x1f638;",
            "name": "GRINNING CAT FACE WITH SMILING EYES"
        },
        {
            "code": "&#x1f63b;",
            "name": "SMILING CAT FACE WITH HEART-SHAPED EYES"
        },
        {
            "code": "&#x1f63d;",
            "name": "KISSING CAT FACE WITH CLOSED EYES"
        },
        {
            "code": "&#x1f63c;",
            "name": "CAT FACE WITH WRY SMILE"
        },
        {
            "code": "&#x1f640;",
            "name": "WEARY CAT FACE"
        },
        {
            "code": "&#x1f63f;",
            "name": "CRYING CAT FACE"
        },
        {
            "code": "&#x1f639;",
            "name": "CAT FACE WITH TEARS OF JOY"
        },
        {
            "code": "&#x1f63e;",
            "name": "POUTING CAT FACE"
        },
        {
            "code": "&#x1f479;",
            "name": "JAPANESE OGRE"
        },
        {
            "code": "&#x1f47a;",
            "name": "JAPANESE GOBLIN"
        },
        {
            "code": "&#x1f648;",
            "name": "SEE-NO-EVIL MONKEY"
        },
        {
            "code": "&#x1f649;",
            "name": "HEAR-NO-EVIL MONKEY"
        },
        {
            "code": "&#x1f64a;",
            "name": "SPEAK-NO-EVIL MONKEY"
        },
        {
            "code": "&#x1f480;",
            "name": "SKULL"
        },
        {
            "code": "&#x1f47d;",
            "name": "EXTRATERRESTRIAL ALIEN"
        },
        {
            "code": "&#x1f4a9;",
            "name": "PILE OF POO"
        },
        {
            "code": "&#x1f525;",
            "name": "FIRE"
        },
        {
            "code": "&#x2728;",
            "name": "SPARKLES"
        },
        {
            "code": "&#x1f31f;",
            "name": "GLOWING STAR"
        },
        {
            "code": "&#x1f4ab;",
            "name": "DIZZY SYMBOL"
        },
        {
            "code": "&#x1f4a5;",
            "name": "COLLISION SYMBOL"
        },
        {
            "code": "&#x1f4a2;",
            "name": "ANGER SYMBOL"
        },
        {
            "code": "&#x1f4a6;",
            "name": "SPLASHING SWEAT SYMBOL"
        },
        {
            "code": "&#x1f4a7;",
            "name": "DROPLET"
        },
        {
            "code": "&#x1f4a4;",
            "name": "SLEEPING SYMBOL"
        },
        {
            "code": "&#x1f4a8;",
            "name": "DASH SYMBOL"
        },
        {
            "code": "&#x1f442;",
            "name": "EAR"
        },
        {
            "code": "&#x1f440;",
            "name": "EYES"
        },
        {
            "code": "&#x1f443;",
            "name": "NOSE"
        },
        {
            "code": "&#x1f445;",
            "name": "TONGUE"
        },
        {
            "code": "&#x1f444;",
            "name": "MOUTH"
        },
        {
            "code": "&#x1f44d;",
            "name": "THUMBS UP SIGN"
        },
        {
            "code": "&#x1f44e;",
            "name": "THUMBS DOWN SIGN"
        },
        {
            "code": "&#x1f44c;",
            "name": "OK HAND SIGN"
        },
        {
            "code": "&#x1f44a;",
            "name": "FISTED HAND SIGN"
        },
        {
            "code": "&#x270a;",
            "name": "RAISED FIST"
        },
        {
            "code": "&#x270c;",
            "name": "VICTORY HAND"
        },
        {
            "code": "&#x1f44b;",
            "name": "WAVING HAND SIGN"
        },
        {
            "code": "&#x270b;",
            "name": "RAISED HAND"
        },
        {
            "code": "&#x1f450;",
            "name": "OPEN HANDS SIGN"
        },
        {
            "code": "&#x1f446;",
            "name": "WHITE UP POINTING BACKHAND INDEX"
        },
        {
            "code": "&#x1f447;",
            "name": "WHITE DOWN POINTING BACKHAND INDEX"
        },
        {
            "code": "&#x1f449;",
            "name": "WHITE RIGHT POINTING BACKHAND INDEX"
        },
        {
            "code": "&#x1f448;",
            "name": "WHITE LEFT POINTING BACKHAND INDEX"
        },
        {
            "code": "&#x1f64c;",
            "name": "PERSON RAISING BOTH HANDS IN CELEBRATION"
        },
        {
            "code": "&#x1f64f;",
            "name": "PERSON WITH FOLDED HANDS"
        },
        {
            "code": "&#x261d;",
            "name": "WHITE UP POINTING INDEX"
        },
        {
            "code": "&#x1f44f;",
            "name": "CLAPPING HANDS SIGN"
        },
        {
            "code": "&#x1f4aa;",
            "name": "FLEXED BICEPS"
        },
        {
            "code": "&#x1f6b6;",
            "name": "PEDESTRIAN"
        },
        {
            "code": "&#x1f3c3;",
            "name": "RUNNER"
        },
        {
            "code": "&#x1f483;",
            "name": "DANCER"
        },
        {
            "code": "&#x1f46b;",
            "name": "MAN AND WOMAN HOLDING HANDS"
        },
        {
            "code": "&#x1f46a;",
            "name": "FAMILY"
        },
        {
            "code": "&#x1f46c;",
            "name": "TWO MEN HOLDING HANDS"
        },
        {
            "code": "&#x1f46d;",
            "name": "TWO WOMEN HOLDING HANDS"
        },
        {
            "code": "&#x1f48f;",
            "name": "KISS"
        },
        {
            "code": "&#x1f491;",
            "name": "COUPLE WITH HEART"
        },
        {
            "code": "&#x1f46f;",
            "name": "WOMAN WITH BUNNY EARS"
        },
        {
            "code": "&#x1f646;",
            "name": "FACE WITH OK GESTURE"
        },
        {
            "code": "&#x1f645;",
            "name": "FACE WITH NO GOOD GESTURE"
        },
        {
            "code": "&#x1f481;",
            "name": "INFORMATION DESK PERSON"
        },
        {
            "code": "&#x1f64b;",
            "name": "HAPPY PERSON RAISING ONE HAND"
        },
        {
            "code": "&#x1f486;",
            "name": "FACE MASSAGE"
        },
        {
            "code": "&#x1f487;",
            "name": "HAIRCUT"
        },
        {
            "code": "&#x1f485;",
            "name": "NAIL POLISH"
        },
        {
            "code": "&#x1f470;",
            "name": "BRIDE WITH VEIL"
        },
        {
            "code": "&#x1f64e;",
            "name": "PERSON WITH POUTING FACE"
        },
        {
            "code": "&#x1f64d;",
            "name": "PERSON FROWNING"
        },
        {
            "code": "&#x1f647;",
            "name": "PERSON BOWING DEEPLY"
        },
        {
            "code": "&#x1f3a9;",
            "name": "TOP HAT"
        },
        {
            "code": "&#x1f451;",
            "name": "CROWN"
        },
        {
            "code": "&#x1f452;",
            "name": "WOMANS HAT"
        },
        {
            "code": "&#x1f45f;",
            "name": "ATHLETIC SHOE"
        },
        {
            "code": "&#x1f45e;",
            "name": "MANS SHOE"
        },
        {
            "code": "&#x1f461;",
            "name": "WOMANS SANDAL"
        },
        {
            "code": "&#x1f460;",
            "name": "HIGH-HEELED SHOE"
        },
        {
            "code": "&#x1f462;",
            "name": "WOMANS BOOTS"
        },
        {
            "code": "&#x1f455;",
            "name": "T-SHIRT"
        },
        {
            "code": "&#x1f454;",
            "name": "NECKTIE"
        },
        {
            "code": "&#x1f45a;",
            "name": "WOMANS CLOTHES"
        },
        {
            "code": "&#x1f457;",
            "name": "DRESS"
        },
        {
            "code": "&#x1f3bd;",
            "name": "RUNNING SHIRT WITH SASH"
        },
        {
            "code": "&#x1f456;",
            "name": "JEANS"
        },
        {
            "code": "&#x1f458;",
            "name": "KIMONO"
        },
        {
            "code": "&#x1f459;",
            "name": "BIKINI"
        },
        {
            "code": "&#x1f4bc;",
            "name": "BRIEFCASE"
        },
        {
            "code": "&#x1f45c;",
            "name": "HANDBAG"
        },
        {
            "code": "&#x1f45d;",
            "name": "POUCH"
        },
        {
            "code": "&#x1f45b;",
            "name": "PURSE"
        },
        {
            "code": "&#x1f453;",
            "name": "EYEGLASSES"
        },
        {
            "code": "&#x1f380;",
            "name": "RIBBON"
        },
        {
            "code": "&#x1f302;",
            "name": "CLOSED UMBRELLA"
        },
        {
            "code": "&#x1f484;",
            "name": "LIPSTICK"
        },
        {
            "code": "&#x1f49b;",
            "name": "YELLOW HEART"
        },
        {
            "code": "&#x1f499;",
            "name": "BLUE HEART"
        },
        {
            "code": "&#x1f49c;",
            "name": "PURPLE HEART"
        },
        {
            "code": "&#x1f49a;",
            "name": "GREEN HEART"
        },
        {
            "code": "&#x2764;",
            "name": "HEAVY BLACK HEART"
        },
        {
            "code": "&#x1f494;",
            "name": "BROKEN HEART"
        },
        {
            "code": "&#x1f497;",
            "name": "GROWING HEART"
        },
        {
            "code": "&#x1f493;",
            "name": "BEATING HEART"
        },
        {
            "code": "&#x1f495;",
            "name": "TWO HEARTS"
        },
        {
            "code": "&#x1f496;",
            "name": "SPARKLING HEART"
        },
        {
            "code": "&#x1f49e;",
            "name": "REVOLVING HEARTS"
        },
        {
            "code": "&#x1f498;",
            "name": "HEART WITH ARROW"
        },
        {
            "code": "&#x1f48c;",
            "name": "LOVE LETTER"
        },
        {
            "code": "&#x1f48b;",
            "name": "KISS MARK"
        },
        {
            "code": "&#x1f48d;",
            "name": "RING"
        },
        {
            "code": "&#x1f48e;",
            "name": "GEM STONE"
        },
        {
            "code": "&#x1f464;",
            "name": "BUST IN SILHOUETTE"
        },
        {
            "code": "&#x1f465;",
            "name": "BUSTS IN SILHOUETTE"
        },
        {
            "code": "&#x1f4ac;",
            "name": "SPEECH BALLOON"
        },
        {
            "code": "&#x1f463;",
            "name": "FOOTPRINTS"
        },
        {
            "code": "&#x1f4ad;",
            "name": "THOUGHT BALLOON"
        }
    ]
    //$scope.orderProp = 'age';
}
