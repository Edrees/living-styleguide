import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles,
} from '../../all-components-lib/components';
import PageHeaderContent from '../../components/PageHeaderContent';

const vocabularyList = [
  {
    id: '1',
    name: 'Atom',
    description:
      "Atoms are the smallest and basic HTML elements in a webpage. A label, an input field & a button are examples of an atom and that can't be broken down any further. Atoms can also contain other abstract elements such as color palettes or fonts",
  },
  {
    id: '2',
    name: 'Design System',
    description:
      'A collection of reusable components, governed by clear standards, that can be assembled together to build any number of applications or products. It is the single source of truth which groups all the elements that will allow the teams to design, realize and develop a product.',
  },
  {
    id: '3',
    name: 'Landing Page',
    description: 'Monetarized, isolated page, not indexed page, related to a campaign',
  },
  {
    id: '4',
    name: 'Component',
    description:
      'Components are portions of reusable code within your system and they serve as the building blocks of your application’s interface. Components range in complexity. Reducing components to a single function, like a button or a drop down increases flexibility, making them more reusable. More complex components, like tables for specific types of data, can serve their use cases well, but this complexity limits the number of applicable scenarios. The more reusable your components are, the less you need to maintain, and the easier scale becomes.',
  },
  {
    id: '5',
    name: 'Content Type',
    description:
      'Contentful organizes content into spaces, that allows you to group all the related resources for a project together, this includes content entries, media assets, and settings for localizing content into different languages. Each space has a content model that represents the content types you create.',
  },
  {
    id: '6',
    name: 'Molecule',
    description:
      'Molecules are basically a combination of different atoms. In the sense of atomic design molecules are the smallest possible, fundamental unit from the combination of different atoms. For example a search form which contains a label, input field & a button',
  },
  {
    id: '7',
    name: 'Organisms',
    description:
      'Organisms are a combination of different molecules and sometimes includes an atom which forms a section of a page. For example a page header which contains a logo, navigation menu and a search field. Logo is an atom in this case and the navigation menu and search field are molecules',
  },
  {
    id: '8',
    name: 'Style Guide',
    description:
      'A style guide is a document that provides guidelines for the way your brand should be presented from both a graphic and language perspective. The purpose of a style guide is to make sure that multiple contributors create in a clear and cohesive way that reflects the corporate style and ensures brand consistency with everything from design to writing.',
  },
  {
    id: '9',
    name: 'Template',
    description:
      'The template is the first concrete result of the web design process. Basically it is the skeleton of a web page/ interface and contains organisms. Templates are page-level objects that place components into a layout and articulate the design’s underlying content structure.',
  },
  {
    id: '10',
    name: 'Unbounce',
    description:
      'Tool for creating, editing and managing landing pages (see definition above). These pages will not be delivered on contentful',
  },
  {
    id: '11',
    name: 'Term',
    description: 'Description',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
  },
  table: {
    minWidth: 480,
  },
  firstColumn: {
    minWidth: '150px',
    verticalAlign: 'top',
    paddingRight: theme.spacing(2),
  },
}));

const VocabularyPage = () => {
  const classes = useStyles();

  return (
    <PageHeaderContent
      title="Vocabulary"
      description="It’s important to use the same words, spelling, and capitalization consistently,
        otherwise things start looking messy and confusing for our application users."
    >
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Term</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {vocabularyList
              .sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
              })
              .map(row => (
                <TableRow key={row.id}>
                  <TableCell className={classes.firstColumn}>{row.name}</TableCell>
                  <TableCell>{row.description}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Paper>
    </PageHeaderContent>
  );
};

export default VocabularyPage;
