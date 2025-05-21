import {moderateScale} from './responsive';

const FONT_FAMILY = 'Poppins';

const FONT_VARIANTS = {
  REGUALR: `${FONT_FAMILY}-Regular`,
  MEDIUM: `${FONT_FAMILY}-Medium`,
  SEMI_BOLD: `${FONT_FAMILY}-SemiBold`,
  BOLD: `${FONT_FAMILY}-Bold`,
  THIN: `${FONT_FAMILY}-Thin`,
};

export const typography = {
  REGULAR: {
    F_10: {
      fontFamily: FONT_VARIANTS.REGUALR,
      fontSize: moderateScale(10),
    },
    F_12: {
      fontFamily: FONT_VARIANTS.REGUALR,
      fontSize: moderateScale(12),
    },
    F_14: {
      fontFamily: FONT_VARIANTS.REGUALR,
      fontSize: moderateScale(14),
    },
    F_16: {
      fontFamily: FONT_VARIANTS.REGUALR,
      fontSize: moderateScale(16),
    },
    F_18: {
      fontFamily: FONT_VARIANTS.REGUALR,
      fontSize: moderateScale(18),
    },
    F_20: {
      fontFamily: FONT_VARIANTS.REGUALR,
      fontSize: moderateScale(20),
    },
  },
  MEDIUM: {
    F_8: {
      fontFamily: FONT_VARIANTS.MEDIUM,
      fontSize: moderateScale(8),
    },
    F_10: {
      fontFamily: FONT_VARIANTS.MEDIUM,
      fontSize: moderateScale(10),
    },
    F_12: {
      fontFamily: FONT_VARIANTS.MEDIUM,
      fontSize: moderateScale(12),
    },
    F_14: {
      fontFamily: FONT_VARIANTS.MEDIUM,
      fontSize: moderateScale(14),
    },
    F_16: {
      fontFamily: FONT_VARIANTS.MEDIUM,
      fontSize: moderateScale(16),
    },
    F_18: {
      fontFamily: FONT_VARIANTS.MEDIUM,
      fontSize: moderateScale(18),
    },
    F_20: {
      fontFamily: FONT_VARIANTS.MEDIUM,
      fontSize: moderateScale(20),
    },
    F_22: {
      fontFamily: FONT_VARIANTS.MEDIUM,
      fontSize: moderateScale(22),
    },
    F_24: {
      fontFamily: FONT_VARIANTS.MEDIUM,
      fontSize: moderateScale(24),
    },
  },
  SEMI_BOLD: {
    F_12: {
      fontFamily: FONT_VARIANTS.SEMI_BOLD,
      fontSize: moderateScale(12),
    },
    F_14: {
      fontFamily: FONT_VARIANTS.SEMI_BOLD,
      fontSize: moderateScale(14),
    },
    F_16: {
      fontFamily: FONT_VARIANTS.SEMI_BOLD,
      fontSize: moderateScale(16),
    },
    F_18: {
      fontFamily: FONT_VARIANTS.SEMI_BOLD,
      fontSize: moderateScale(18),
    },
  },
  BOLD: {
    F_8: {
      fontFamily: FONT_VARIANTS.BOLD,
      fontSize: moderateScale(8),
      fontWeight: 'bold',
    },
    F_10: {
      fontFamily: FONT_VARIANTS.BOLD,
      fontSize: moderateScale(10),
      fontWeight: 'bold',
    },
    F_12: {
      fontFamily: FONT_VARIANTS.BOLD,
      fontSize: moderateScale(12),
     
    },
    F_14: {
      fontFamily: FONT_VARIANTS.BOLD,
      fontSize: moderateScale(14),
     
    },
    F_16: {
      fontFamily: FONT_VARIANTS.BOLD,
      fontSize: moderateScale(16),
    },
    F_18: {
      fontFamily: FONT_VARIANTS.BOLD,
      fontSize: moderateScale(18),
      
    },
    F_20: {
      fontFamily: FONT_VARIANTS.BOLD,
      fontSize: moderateScale(20),
    
    },
    F_22: {
      fontFamily: FONT_VARIANTS.BOLD,
      fontSize: moderateScale(22),
    }, 
    F_24: {
      fontFamily: FONT_VARIANTS.BOLD,
      fontSize: moderateScale(24),
    },
  },
  THIN: {
    F_8: {
      fontFamily: FONT_VARIANTS.THIN,
      fontSize: moderateScale(8),
    },
    F_10: {
      fontFamily: FONT_VARIANTS.THIN,
      fontSize: moderateScale(10),
    },
    F_12: {
      fontFamily: FONT_VARIANTS.THIN,
      fontSize: moderateScale(12),
    },
    F_14: {
      fontFamily: FONT_VARIANTS.THIN,
      fontSize: moderateScale(14),
    },
    F_16: {
      fontFamily: FONT_VARIANTS.THIN,
      fontSize: moderateScale(16),
    },
    F_18: {
      fontFamily: FONT_VARIANTS.THIN,
      fontSize: moderateScale(18),
    },
    F_20: {
      fontFamily: FONT_VARIANTS.THIN,
      fontSize: moderateScale(20),
    },
  }
};
