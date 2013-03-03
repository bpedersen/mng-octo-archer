angular.module('mongolab', ['ngResource']).
factory('Project', function($resource){
	var Project = $resource('https://api.mongolab.com/api/1/databases/notes/collections/sc/:id',
		{apiKey: 'Ygaw45PfeQbsNxjwiisVk593i_cLi56A'},{update: {method: 'PUT'}}
	);
	Project.prototype.update = function(cb){
		return Project.update({id: this._id.$oid},
			angular.extend({}, this, {_id:undefined}), cb);
	};
	Project.prototype.destroy = function(cb){
		return Project.remove({id: this._id.$oid}, cb);
	};
	return Project;
});
