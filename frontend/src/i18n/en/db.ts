export default {
    db: {
        // db instance
        dbManage: 'DB Management',
        port: 'Port',
        connParam: 'Connection Params',
        keywordPlaceholder: 'host / name / code',
        acName: 'Credential',
        dbInst: 'DB Instance',
        manageDbTitle: 'Manage the [{instName}] database',
        sqlitePathPlaceholder: 'Please enter the absolute address of the sqlite file on the server',
        connParamPlaceholder: 'Other connection parameters of the form key1=value1&key2=value2',
        connSuccess: 'be connected successfully',
        showDb: 'View DB',
        db: 'Database',
        dbFilterPlaceholder: 'DB name: Input filterable',
        sqlRecord: 'SQL records',
        dump: 'Export',
        dumpContent: 'Export Content',
        structure: 'Structure',
        data: 'Data',
        extName: 'Ext Name',
        dbFilterPlacehoder: 'Filter by database name',
        allDb: 'All DB',
        dumpDb: 'Export DB',
        getDbMode: 'Get DB Mode',
        noDumpDbMsg: 'Add the database you want to export',
        allSelect: 'check all',
        selectDbPlacehoder: '',

        // db
        dbInstInfo: 'DB Instance Info',
        newQuery: 'New Query',
        locationTagTree: 'Navigate to the specified position in the left tree',
        dbShowSetting: 'DB View Setting',
        showFieldComments: 'Show column comment',
        autoLocationTagTree: 'Automatically locate the tree nodes',
        cacheTableInfo: 'Cache table information -[If not enabled, get table information in real time]',
        dbName: 'DB Name',
        table: 'Table',
        createTable: 'Create Table',
        tableOp: 'Table Operation',
        copyTable: 'Copy Table',
        renameTable: 'Rename',
        editTable: 'Edit',
        delTable: 'Delete Table',
        close: 'Close',
        closeOther: 'Close Other',
        noDbInstMsg: 'Select the database instance and the corresponding schema',
        query: 'Query',
        nQuery: 'NewQuery',
        renamePrompt: 'Rename table 【{db}.{tableName}】',
        noChange: 'No change',
        isCopyTableData: 'Do you copy data?',
        execSuccess: 'Successful execution',
        execFail: 'Execution failure',
        sqlScriptRun: 'Run SQL Script',
        saveSql: 'Save SQL',
        execInfo: 'Execution info',
        result: 'Result',
        times: 'times',
        resultSet: 'Result Set',
        tableDataEmptyTextTips:
            'tips: Single table query at the beginning of select * or click the default query data of the table name, double-click the data online modification',
        noSelctRunSqlMsg: 'Select the sql you want to execute',
        enterExecRemarkTips: 'Please enter remark',
        execRemarkPlaceholder: 'Enter the remark to execute the sql',
        currentSqlTabIsRunning: 'The current result set tab is being executed, please use the new TAB to execute',
        sqlCannotEmpty: 'sql content cannot be empty',
        enterSqlScriptNameTips: 'Please enter the SQL script name',
        scriptFileUploadRunning: `'{filename}' is being uploaded for execution, please pay attention to the result notification`,
        runSql: 'Run SQL',
        newTabRunSql: 'NewTab Run SQL',
        formatSql: 'Format SQL',

        execTime: 'execution time',
        oneClickCopy: 'One click copy',
        asc: 'Asc',
        desc: 'Desc',
        fixed: 'Fixed',
        cancelFiexd: 'Cancel Fixed',
        formView: 'Form View',
        genJson: 'Generating JSON',
        exportCsv: 'Export CSV',
        exportSql: 'Export SQL',
        onlySelectOneData: 'Only one row can be selected',

        editField: 'Edit field',
        valueTypeNoMatch: 'The input does not match the type',

        tableFieldConf: 'Table field Configuration',
        columnFilterPlaceholder: 'Enter column name or remark filter',
        selectAll: 'Select All',
        submitUpdate: 'Submit changes',
        cancelUpdate: 'Cancel changes',
        autoCompleteColumnPlaceholder:
            'Select a column or enter a SQL conditional expression and press Enter or click the query icon to filter the results. The input can be prompted by the field name',
        selectColumn: 'Select Column',
        columnName: 'Column Name',
        homePage: 'Home Page',
        previousPage: 'Previous Page',
        rowsPage: 'rows/page',
        rows: 'rows',
        conditionInputDialogTitle: 'Enter the value of [{columnName}]',
        addDataDialogTitle: 'Add `{tableName}` table data',

        exportContent: 'Export Content',
        selectExportTable: 'Select the table you want to export first',
        tableNamePlaceholder: 'Table name: Input filterable',
        comment: 'Comment',
        commentPlaceholder: 'Comment: Input filterable',
        dataSize: 'Data Size',
        indexSize: 'Index Size',
        column: 'Column',
        index: 'Index',
        nullable: 'Nullable',
        seqInIndex: 'Sequence number',

        // DbSqlExecLog
        selectDbPlaceholder: 'Please select database',
        restoreSql: 'Restore SQL',
        stmtType: 'Statement type',
        execUser: 'Executor',
        execRes: 'Result',
        oldValue: 'Old Value',

        // db transfer
        pleaseSetting: 'Please set',
        log: 'Logs',
        stop: 'Stop',
        run: 'Run',
        file: 'File',
        taskName: 'Task Name',
        srcDb: 'Source DB',
        runState: 'Run State',
        createDbTransferDialogTitle: 'Added DB transfer task (transfer does not change the source DB)',
        editDbTransferDialogTitle: 'Modify the DB transfer task (transfer does not change the source DB)',
        stopConfirm: 'Sure to stop?',
        runConfirm: 'Sure to run?',
        transferFileManage: 'Transfer file management',
        dbFileType: 'DB dialect file',
        targetDb: 'Target DB',
        fileDbType: 'SQL Dialect',
        transferFileRunDialogTitle: 'Specify the database to execute the sql file',
        targetDbTypeSelectError: 'Please select [{dbType}] database',
        cronAble: 'Timed transfer',
        transferMode: 'Transfer Mode',
        transfer2Db: 'Transfer to DB',
        transfer2File: 'Transfer to File',
        fileSaveDays: 'File retention days',
        transferStrategy: 'Transfer Strategy',
        day: 'Day',
        transferFull: 'Full',
        transferIncrement: 'Increment（not yet available）',
        nameCase: 'Convert',
        none: 'None',
        lower: 'Lower',
        upper: 'Upper',
        dbObj: 'DB',
        allTable: 'All Table',
        custom: 'Custom',
        noTransferTableMsg: 'Select the table you want to transfer',

        // dbSync
        recentState: 'Recent task status',
        dbSync: 'Data Synchronism',
        realTime: 'Real Time',
        noRealTime: 'Non-real time',
        srcDataSql: 'Source Data SQL',
        targetDbTable: 'Target Db table',
        pageSize: 'Page Size',
        pageSizePlaceholder: 'Size of data per page queried when synchronizing data',
        updateField: 'Update Field',
        updateFieldTips: 'The current maximum value of this field will be included when querying the data source, with aliases such as t.reate_time',
        updateFiledPlaceholder: 'The current maximum value of this field will be included when querying the data source',
        updateFieldValue: 'Update Field Value',
        updateFieldValueTips:
            'The record updates the current value of the field, such as: current time, current date, etc., and the next time the data is queried, the value condition will be added',
        updateFieldValuePlaceholder: 'Update the current maximum value of the field',
        fieldValueSrc: 'Source of values',
        fieldValueSrcTips:
            'The field name of the updated value is taken from the query result. The default is the same as the updated field. If the query result specifies a field alias and is inconsistent with the original updated field, the field value is the current updated value',
        fieldValueSrcPlaceholder: 'Update the value source',
        fieldMap: 'Field Mapping',
        srcField: 'Source Field',
        targetField: 'Target Field',
        sqlPreview: 'SQL Preview',
        selectSql: 'Select SQL',
        insertSql: 'Insert SQL',
        keyDuplicateStrategy: 'Key Duplicate Strategy',
        fieldMapError: 'There are duplicate target fields in the field map, please check',
        noDataSqlMsg: 'Please enter data sql',
        notSelectSql: 'sql statement error, please enter the select statement',
        notOneSql: 'sql statement error, please enter a single query statement',
        notColumnSql: 'No field found. Check your sql',

        // enums
        getDbNamesModeAuto: 'Real-time get db',
        getDbNamesModeAssign: 'Specifying the db name',

        ignore: 'Ignore',
        replate: 'Replate',

        running: 'Running',
        waitRun: 'Wait Run',
    },
};
