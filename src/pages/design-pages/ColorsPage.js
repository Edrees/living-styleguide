import React from 'react';
import PropTypes from 'prop-types';

import { Card, Tooltip, makeStyles } from '../../all-components-lib/components';
import PageHeaderContent from '../../components/PageHeaderContent';
import colors from '../../theme/styles/_colors.scss';

const oranges = ['lightTone', 'Orange', colors.orange1, colors.orange2];
const blues = ['lightTone', 'Blue', colors.blue1, colors.blue2, colors.blue3];
const bluegrays = ['lightTone', 'Blue Gray', colors.blueGray1, colors.blueGray2, colors.blueGray3];
const darkgrays = ['darkTone', 'Dark Gray', colors.darkGray1, colors.darkGray2, colors.darkGray3];

const allColors = [[...oranges], [...blues], [...bluegrays], [...darkgrays]];

const useStyles = makeStyles(theme => ({
  colorsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  colorsGridBlock: {
    flex: '1 1 150px',
    margin: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      flex: '1 1 210px',
    },
    [theme.breakpoints.down('xs')]: {
      flex: '1 1 100%',
    },
  },
  colorBlocks: {
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkTone: {
    color: colors.white,
  },
}));

const ColorPalette = ({ palette, tone }) => {
  const classes = useStyles();

  return (
    <div className={classes.colorGridBlock}>
      {palette.map((color, index) => {
        return index > 0 ? (
          <div
            className={classes.colorBlocks}
            key={color}
            style={index !== 1 ? { backgroundColor: color } : { backgroundColor: 'transparent' }}
          >
            <span>{index === 1 ? color : null}</span>
            {index > 1 && (
              <Tooltip title={color} placement="left" interactive>
                <span className={tone === 'dark' ? classes.darkTone : null}>View code</span>
              </Tooltip>
            )}
          </div>
        ) : (
          false
        );
      })}
    </div>
  );
};

const Colors = () => {
  const classes = useStyles();

  return (
    <PageHeaderContent title="Colors" description="Defining colors is really essential">
      Color swatches
      <div className={classes.colorsGrid}>
        {allColors.map(colorPalette => {
          return (
            <Card key={colorPalette} className={classes.colorsGridBlock}>
              {colorPalette.includes('lightTone') ? (
                <ColorPalette palette={colorPalette} tone="light" />
              ) : (
                <ColorPalette palette={colorPalette} tone="dark" />
              )}
            </Card>
          );
        })}
      </div>
    </PageHeaderContent>
  );
};

ColorPalette.propTypes = {
  palette: PropTypes.arrayOf(PropTypes.any).isRequired,
  tone: PropTypes.string.isRequired,
};

export default Colors;
