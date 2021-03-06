'use strict';

/* Controllers */

  // Form controller
app.controller('NetworkExplorationCtrl', ['$scope','cytoData','$uibModal', function($scope,cytoData,$uibModal) {
    $scope.submitForm = function() {
        $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title-top',
            ariaDescribedBy: 'modal-body-top',
            templateUrl: 'tpl/distinctive_summarization_submission_modal.html',
            resolve: {
                request: function () {
                    return $scope.request;
                }
            },
            controller: function ($uibModalInstance, request) {
                var $ctrl = this;
                $ctrl.request = request;

                $ctrl.ok = function () {
                    $uibModalInstance.close();
                };

                $ctrl.cancel = function () {
                    $uibModalInstance.dismiss('cancel');
                };
            },
            controllerAs: '$ctrl'
        });
    }

    cytoData.getGraph('core').then(function(graph){
        $scope.graph = graph;
        // $scope.graph.center()
    });
    $scope.center = function(){
        $scope.graph.center()
    };
    $scope.reset = function(isZoomIn){
        $scope.graph.center();
        $scope.graph.zoom({
            level: 1.0
        });
    };

    $scope.options = { //See http://js.cytoscape.org/#core/initialisation for core options
        textureOnViewport:false,
        pixelRatio: 'auto',
        motionBlur: false,
        hideEdgesOnViewport:false
    };

    $scope.resetLayout = function(name){
        if(name == 'circle') {
            $scope.layout = {
                name: 'circle',
                avoidOverlap:false,
                padding:20,
                radius:500
            }
        } else if(name == 'cose') {
            $scope.layout = {
                name: 'cose',
                idealEdgeLength: 10,
                componentSpacing: 30
            }
        } else if(name == 'breadthfirst') {
            $scope.layout = {
                name: 'breadthfirst',
                avoidOverlap: true,
                spacingFactor: 1
            }
        }
    }
    $scope.resetLayout('circle');

    $scope.cy_graph_ready = function(evt){
        $scope.log('graph ready to be interacted with: ', evt);
    }
    $scope.elements = [
        {
            group: 'nodes',
            data: {
                id: 'EndocardialFibroelastosis',
                label:'Endocardial Fibroelastosis'
            },
            selectable: true,
            grabbable: true
        },{
            group: 'nodes',
            data: {
                id: 'FamilialDilatedCardiomyopathy',
                label:'Familial Dilated Cardiomyopathy'
            },
            selectable: true,
            grabbable: true
        },{
            group: 'nodes',
            data: {
                id: 'familialRestrictiveCardiomyopathy',
                label:'familial Restrictive Cardiomyopathy'
            },
            selectable: true,
            grabbable: true
        },{
            group: 'nodes',
            data: {
                id: 'CarvajalSyndrome',
                label:'Carvajal Syndrome'
            },
            selectable: true,
            grabbable: true
        },{
            group: 'nodes',
            data: {
                id: 'Dmd-RelatedDilatedCardiomyopathy',
                label:'Dmd-Related Dilated Cardiomyopathy'
            },
            selectable: true,
            grabbable: true
        },{
            group: 'nodes',
            data: {
                id: 'CentronuclearMyopathy',
                label:'Centronuclear Myopathy'
            },
            selectable: true,
            grabbable: true
        },{
            group: 'nodes',
            data: {
                id: 'ACTC1',
                label:'ACTC1'
            },
            selectable: true,
            grabbable: true,
            classes: 'type2'
        },{
            group: 'nodes',
            data: {
                id: 'TAZ',
                label:'TAZ'
            },
            selectable: true,
            grabbable: true,
            classes: 'type2'
        },{
            group: 'nodes',
            data: {
                id: 'ABCC9',
                label:'ABCC9'
            },
            selectable: true,
            grabbable: true,
            classes: 'type2'
        },{
            group: 'nodes',
            data: {
                id: 'TTN',
                label:'TTN'
            },
            selectable: true,
            grabbable: true,
            classes: 'type2'
        },{
            group: 'nodes',
            data: {
                id: 'TNNI3',
                label:'TNNI3'
            },
            selectable: true,
            grabbable: true,
            classes: 'type2'
        },{
            group: 'nodes',
            data: {
                id: 'DSC2',
                label:'DSC2'
            },
            selectable: true,
            grabbable: true,
            classes: 'type2'
        },{
            group: 'nodes',
            data: {
                id: 'DMD',
                label:'DMD'
            },
            selectable: true,
            grabbable: true,
            classes: 'type2'
        },{
            group: 'nodes',
            data: {
                id: 'BIN1',
                label:'BIN1'
            },
            selectable: true,
            grabbable: true,
            classes: 'type2'
        },{
            group: 'edges',
            data: {
                source: 'ACTC1',
                target: 'FamilialDilatedCardiomyopathy'
            }
        },{
            group: 'edges',
            data: {
                source: 'ACTC1',
                target: 'familialRestrictiveCardiomyopathy'
            }
        },{
            group: 'edges',
            data: {
                source: 'TAZ',
                target: 'EndocardialFibroelastosis'
            }
        },{
            group: 'edges',
            data: {
                source: 'TAZ',
                target: 'FamilialDilatedCardiomyopathy'
            }
        },{
            group: 'edges',
            data: {
                source: 'ABCC9',
                target: 'familialRestrictiveCardiomyopathy'
            }
        },{
            group: 'edges',
            data: {
                source: 'TTN',
                target: 'CentronuclearMyopathy'
            }
        },{
            group: 'edges',
            data: {
                source: 'TTN',
                target: 'FamilialDilatedCardiomyopathy'
            }
        },{
            group: 'edges',
            data: {
                source: 'TNNI3',
                target: 'FamilialDilatedCardiomyopathy'
            }
        },{
            group: 'edges',
            data: {
                source: 'DSC2',
                target: 'CarvajalSyndrome'
            }
        },{
            group: 'edges',
            data: {
                source: 'DMD',
                target: 'FamilialDilatedCardiomyopathy'
            }
        },{
            group: 'edges',
            data: {
                source: 'DMD',
                target: 'Dmd-RelatedDilatedCardiomyopathy'
            }
        },{
            group: 'edges',
            data: {
                source: 'BIN1',
                target: 'CentronuclearMyopathy'
            }
        }
    ];

    $scope.style = [ // See http://js.cytoscape.org/#style for style formatting and options.
        {
            selector: 'node',
            style: {
                'shape': 'ellipse',
                'border-width': 0,
                'background-color': '#5897fc',
                'color': '#58666e',
                'height': 30,
                'width': 30,
                'font-size':30,
                'label': 'data(label)'


            }
        },{
            selector: 'edge',
            style: {
                'target-arrow-shape': 'triangle',
                'width': 8,
                'line-color': '#ddd',
                'target-arrow-color': '#ddd',
                'curve-style': 'bezier'
            }
        },{
            selector: '.highlighted',
            style : {
                'background-color': '#61bffc',
                'line-color': '#61bffc',
                'target-arrow-color': '#61bffc',
                'transition-property': 'background-color, line-color, target-arrow-color',
                'transition-duration': '0.5s'
            }
        },{
            selector: '.type2',
            style: {
                'background-color': '#27c24c'
            }
        }
    ]

    // var cy = angular.element('#cy #ab').addClass('highlighted')
    //
    // console.log(cy)

}]);
