const utils = require('./utils');

describe('utils', () => {
  test('toSnakeCase', async () => {
    const result = utils.toSnakeCase('Title Case With $pecial and _underscore');

    expect(result).toEqual('title_case_with_pecial_and_underscore');
  });

  describe('parseArgs', () => {
    test('GIVEN single arg, THEN returns options', async () => {

      const meta = {
        description: "Test",
        command: {
            arguments: '<title>',
            requiredOptions: [
                '-l, --lang <lang>',
            ]
        }
      };
      const args = ['PATH', 'fake/action', 'fake_title', '-l', 'ko']
      const result = utils.parseArgs(meta, args);

      delete result.arguments;
      const expected = {
        title: 'fake_title',
        lang: 'ko'
      };

      expect(result).toEqual(expected);
    });

    test('GIVEN multiple args fully mapped, THEN returns options', async () => {

      const meta = {
        description: "Test",
        command: {
            arguments: '<title> <name>',
            requiredOptions: [
                '-l, --lang <lang>',
            ]
        }
      };
      const args = ['PATH', 'fake/action', 'fake_title', 'fake_name', '-l', 'ko']
      const result = utils.parseArgs(meta, args);

      delete result.arguments;
      const expected = {
        title: 'fake_title',
        name: 'fake_name',
        lang: 'ko'
      };

      expect(result).toEqual(expected);
    });

    test('GIVEN multiple args partially mapped, THEN returns options', async () => {

      const meta = {
        description: "Test",
        command: {
            arguments: '<title>',
            requiredOptions: [
                '-l, --lang <lang>',
            ]
        }
      };
      const args = ['PATH', 'fake/action', 'fake_title', 'fake_arg','-l', 'ko']
      const result = utils.parseArgs(meta, args);

      delete result.arguments;
      const expected = {
        title: 'fake_title',
        lang: 'ko'
      };

      expect(result).toEqual(expected);
    });

    test('GIVEN multiple args partially mapped, THEN returns options', async () => {

      const meta = {
        description: "Test",
        command: {
            arguments: '<title>',
            requiredOptions: [
                '-l, --lang <lang>',
            ],
            options: [
              '-c, --cate <cate>',
          ]
        }
      };
      const args = ['PATH', 'fake/action', 'fake_title', 'fake_arg', '-l', 'ko', '--cate', 'fake_cate']
      const result = utils.parseArgs(meta, args);

      delete result.arguments;
      const expected = {
        title: 'fake_title',
        lang: 'ko',
        cate: 'fake_cate',
      };

      expect(result).toEqual(expected);
    });
  });
});