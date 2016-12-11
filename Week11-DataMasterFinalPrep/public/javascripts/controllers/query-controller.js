define(function() {
    'use strict';

    function queryController($scope, result) {
        if (result.ok) {
            $scope.result = "It worked";
            $scope.stateList = result.data;
        } else if (result.requestFailed) {
            $scope.result = JSON.stringify(result.requestFailed, null, 4);
        } else {
            $scope.result = result;
        }

        $scope.docs = result.docs;
    }

    function runQuery(query, $q) {
        'use strict';
        var defers = $q.defer();
        $.getJSON(query, function (json) {
            defers.resolve(json);
        }).fail(function (jqxhr, textStatus, error) {
            var response = JSON.parse(jqxhr.responseText);
            response.genericError = error;
            response.statusText = textStatus;
            defers.resolve({
                'requestFailed': response
            });
        });
        return defers.promise;
    }

    queryController.delete = function ($q) {
        'use strict';
        return runQuery('/deleteDb', $q);
    };

    queryController.create = function ($q) {
        'use strict';
        return runQuery('/createDb', $q);
    };

    queryController.npcsBulk = function ($q) {
        'use strict';
        return runQuery('/insertBulk?fileName=npcs.json', $q);
    };

    queryController.npcsOneDoc = function ($q) {
        'use strict';
        return runQuery('/insertFile?fileName=npcs.json&id=oneDoc', $q);
    };

    queryController.design = function ($q) {
        'use strict';
        return runQuery('/designDoc', $q);
    };

    queryController.viewBulk = function ($q) {
        'use strict';
        return runQuery('/viewBulk?designDoc=npcs&view=docBulk', $q);
    };

    queryController.readOne = function ($q) {
        'use strict';
        return runQuery('/read?docName=npcsDoc', $q);
    };

    queryController.viewOneDoc = function ($q) {
        'use strict';
        return runQuery('/viewOneDoc?designDoc=npcs&view=docNpcsDoc', $q);
    };

    queryController.viewBulkAngular = function ($q) {
        'use strict';
        return runQuery('/viewnpcCapitalAngular?designDoc=npcs&view=docnpcCapital', $q);
    };

    return queryController;
});