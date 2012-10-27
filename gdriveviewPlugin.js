

/** @namespace The global container for eclipse APIs. */
var eclipse = eclipse || {};

/**
 * An implementation of the file service that understands the Orion 
 * server file API. This implementation is suitable for invocation by a remote plugin.
 */
eclipse.SampleFileServiceImpl= (function() {
	/**
	 * @class Provides operations on files, folders, and projects.
	 * @name FileServiceImpl
	 */
	function FileServiceImpl() {
	}
	
	FileServiceImpl.prototype = /**@lends eclipse.FileServiceImpl.prototype */
	{
		/**
		 * Obtains the children of a remote resource
		 * @param location The location of the item to obtain children for
		 * @return A deferred that will provide the array of child objects when complete
		 */
		fetchChildren: function(location) {
		alert("fetch children");
			console.log("fetchChildren: " + location);
			return [
			{
				Directory: false,
				Length: 12292,
				LocalTimeStamp: 1300825902000,
				Location: "gdrive/four.js",
				Name: "four.js"
			},
			{
				Directory: false,
				Length: 12292,
				LocalTimeStamp: 1300826902000,
				Location: "gdrive/five.js",
				Name: "five.js"
			},
			{
				Directory: false,
				Length: 12292,
				LocalTimeStamp: 1300925902000,
				Location: "gdrive/six.js",
				Name: "six.js"
			}
			];
		},

		/**
		 * Creates a new workspace with the given name. The resulting workspace is
		 * passed as a parameter to the provided onCreate function.
		 * @param {String} name The name of the new workspace
		 */
		createWorkspace: function(name) {
			console.log("createWorkspace: " + name);
			return {};
		},

		/**
		 * Loads all the user's workspaces. Returns a deferred that will provide the loaded
		 * workspaces when ready.
		 */
		loadWorkspaces: function() {
			console.log("loadWorkspaces");
			return [];
		},
		
		/**
		 * Loads the workspace with the given id and sets it to be the current
		 * workspace for the IDE. The workspace is created if none already exists.
		 * @param {String} location the location of the workspace to load
		 * @param {Function} onLoad the function to invoke when the workspace is loaded
		 */
		loadWorkspace: function(location) {
			console.log("loadWorkspace: " + location);
			return {Children:[
			{
				Directory: true,
				ChildrenLocation: "sample/457634576354uuid",
				Length: 12292,
				LocalTimeStamp: 1300826902000,
				Location: "gdrive/457634576354uuid",
				Name: "folder"
			},
			{
				Directory: false,
				Length: 12292,
				LocalTimeStamp: 1300825902000,
				Location: "gdrive/one.js",
				Name: "one.js"
			},
			{
				Directory: false,
				Length: 12292,
				LocalTimeStamp: 1300826902000,
				Location: "gdrive/two.js",
				Name: "two.js"
			},
			{
				Directory: false,
				Length: 12292,
				LocalTimeStamp: 1300925902000,
				Location: "gdrive/three.js",
				Name: "three.js"
			}
			]};
		},
		/**
		 * Adds a project to a workspace.
		 * @param {String} url The workspace location
		 * @param {String} projectName the human-readable name of the project
		 * @param {String} serverPath The optional path of the project on the server.
		 * @param {Boolean} create If true, the project is created on the server file system if it doesn't already exist
		 */
		createProject: function(url, projectName, serverPath, create) {
			if (!url) { // null, undefined, '' ...
				// window.document.eas.status.setErrorMessage("<enter message here>");
				console.error("url is undefined, make sure you're signed in before creating a project");
				return;
			}
			console.log("createProject: " + url + ", name: " + projectName + ", path: " + serverPath + ", create: " + create);
			return {};
		},
		/**
		 * Creates a folder.
		 * @param {String} parentLocation The location of the parent folder
		 * @param {String} folderName The name of the folder to create
		 * @return {Object} JSON representation of the created folder
		 */
		createFolder: function(parentLocation, folderName) {
			console.log("createFolder: " + parentLocation+ ", folderName: " + folderName);
			return {};
		},
		/**
		 * Create a new file in a specified location. Returns a deferred that will provide
		 * The new file object when ready.
		 * @param {String} parentLocation The location of the parent folder
		 * @param {String} fileName The name of the file to create
		 * @return {Object} A deferred that will provide the new file object
		 */
		createFile: function(parentLocation, fileName) {
			console.log("createFile: " + parentLocation+ ", fileName: " + fileName);
			return {};
		},
		/**
		 * Deletes a file or directory.
		 * @param {String} location The location of the file or directory to delete.
		 */
		deleteFile: function(location) {
			console.log("deleteFile: " + location);
			return {};
		},
		
		/**
		 * Moves a file or directory.
		 * @param {String} sourceLocation The location of the file or directory to move.
		 * @param {String} targetLocation The location of the target folder.
		 * @param {String} [name] The name of the destination file or directory in the case of a rename
		 */
		moveFile: function(sourceLocation, targetLocation, name) {
			this._doCopyMove(sourceLocation, targetLocation, true, name);
		},
		 
		/**
		 * Copies a file or directory.
		 * @param {String} sourceLocation The location of the file or directory to copy.
		 * @param {String} targetLocation The location of the target folder.
		 * @param {String} [name] The name of the destination file or directory in the case of a rename
		 */
		copyFile: function(sourceLocation, targetLocation, name) {
			this._doCopyMove(sourceLocation, targetLocation, false, name);
		},
		
		_doCopyMove: function(sourceLocation, targetLocation, isMove, name) {
			if (!name) {
				//take the last segment (trailing slash will product an empty segment)
				var segments = sourceLocation.split("/");
				name = segments.pop() || segments.pop();
			}
			console.log("docopymove: " + sourceLocation+ ", targetLocation: " + targetLocation+ ", isMove: " + isMove+ ", name: " + name);
			return {};
		},
		/**
		 * Returns the contents or metadata of the file at the given location.
		 *
		 * @param {String} location The location of the file to get contents for
		 * @param {Boolean} [isMetadata] If defined and true, returns the file metadata, 
		 *   otherwise file contents are returned
		 * @return A deferred that will be provided with the contents or metadata when available
		 */
		read: function(location, isMetadata) {
			return "Hello World";
		},
		/**
		 * Writes the contents or metadata of the file at the given location.
		 *
		 * @param {String} location The location of the file to set contents for
		 * @param {String|Object} contents The content string, or metadata object to write
		 * @return A deferred for chaining events after the write completes
		 */		
		write: function(location, contents) {
			console.log("writing at location: " + location + ", contents: " + contents);
			return {};
		}
	};
	return FileServiceImpl;
}());
		window.onload = function() {
			var service = new eclipse.SampleFileServiceImpl();
			var provider = new orion.PluginProvider();
			provider.registerService("orion.core.file", service, {Name:'sample file service', top:'gdrive', pattern:'gdrive'});
			provider.connect();
		};