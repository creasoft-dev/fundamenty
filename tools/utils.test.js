const utils = require('./utils');

describe('utils', () => {
  describe('flattenObject', () => {
    test('WHEN input: null, THEN return null', async () => {
      const result = utils.flattenObject(null, '_');
      console.log('~~result', result);
      expect(result).toBeNull();
    });
    
    test('WHEN input: primitive value, THEN return the input', async () => {
      const r1 = utils.flattenObject('hello', '_');
      const r2 = utils.flattenObject(1234, '_');
      const r3 = utils.flattenObject(false, '_');
      expect(r1).toEqual('hello');
      expect(r2).toEqual(1234);
      expect(r3).toEqual(false);
    });

    test('WHEN input: obj with nested structure, THEN return flattened', async () => {
      const input = {
        top: {
          l1: {
            l2arr: ['test', 'test2'],
            l2bool: true,
          },
          l1str: "L1-String",
          l1num: 20200924        
        },
        topnull: null
      };
      const result = utils.flattenObject(input, '_');

      expected = {
        top_l1_l2arr: input.top.l1.l2arr,
        top_l1_l2bool: input.top.l1.l2bool,
        top_l1str: input.top.l1str,
        top_l1num: input.top.l1num,
        topnull: null,
      };

      expect(result).toEqual(expected);
    });
  });

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

    test('GIVEN boolean option, THEN returns options', async () => {

      const meta = {
        description: "Test",
        command: {
            arguments: '<title>',
            requiredOptions: [
                '-b, --boolean',
            ],
            options: [
              '-v, --verbose',
              '-d, --dummy',
          ]
        }
      };
      const args = ['PATH', 'fake/action', 'fake_title', '-b','--verbose']
      const result = utils.parseArgs(meta, args);

      delete result.arguments;
      const expected = {
        title: 'fake_title',
        boolean: true,
        verbose: true,
        dummy: undefined,
      };

      expect(result).toEqual(expected);
    });
  });
});