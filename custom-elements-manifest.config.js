import { readmePlugin } from 'cem-plugin-readme';

export default {
  globs: ['src/codesandbox-button.ts'],
  plugins: [
    {
      moduleLinkPhase({ moduleDoc }) {
        moduleDoc.path = moduleDoc.path.replace(/src\/(.*)\.ts/, '$1.js')
        moduleDoc.exports.forEach(e => {
          if (e.declaration?.module)
            e.declaration.module = e.declaration.module.replace(/src\/(.*)\.ts/, '$1.js');
        })
      }
    },
    readmePlugin(),
  ],
};
