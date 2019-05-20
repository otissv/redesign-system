export function typographyTheme({ theme: { animation } }) {
  return {
    transition: animation.easeMedium(),

    /* =====================================
     * Align
     * =================================== */

    /* =====================================
     * Vertical
     * =================================== */
  }
}

export function typographyContextTheme({ context, theme: { color } }) {
  return (
    {
      accent: {
        color: color.accent,
      },
      action: {
        color: color.action,
      },
      danger: {
        color: color.danger,
      },
      disabled: {
        color: color.disabled,
      },
      success: {
        color: color.success,
      },
      warning: {
        color: color.warning,
      },
    }[context] || ''
  )
}

export function typographyModifyTheme({ modify, theme: { color, font } }) {
  return (
    {
      lead: {
        fontSize: font.size[8],
        fontWeight: 300,
      },
      meta: {
        fontSize: font.size[2],
        color: color['grey-500'],
      },
    }[modify] || ''
  )
}

export function typographyWrapTheme({ wrap }) {
  return (
    {
      truncate: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      break: {
        wordWrap: 'break-word',
        hyphens: 'auto',
      },
      nowrap: {
        whiteSpace: 'nowrap',
      },
    }[wrap] || ''
  )
}

export function typographyTransformTheme({ textTransform }) {
  return (
    {
      capitalize: {
        textTransform: 'capitalize',
      },
      lowercase: {
        textTransform: 'lowercase',
      },
      uppercase: {
        textTransform: 'uppercase',
      },
    }[textTransform] || ''
  )
}
export function typographyTextAlignTheme({ textAlign }) {
  return (
    {
      left: {
        textAlign: 'left',
      },
      leftSmall: {
        textAlign: 'left',
      },
      leftMedium: {
        textAlign: 'left',
      },
      leftLarge: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
      rightSmall: {
        textAlign: 'right',
      },
      rightMedium: {
        textAlign: 'right',
      },
      center: {
        textAlign: 'center',
      },
      centerSmall: {
        textAlign: 'center',
      },
      centerMedium: {
        textAlign: 'center',
      },
      centerLarge: {
        textAlign: 'center',
      },
      justify: {
        textAlign: 'justify',
      },
    }[textAlign] || ''
  )
}
