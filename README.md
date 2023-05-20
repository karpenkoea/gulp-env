# gulp-env
 This contains settings for gulp and all the dependencies it needs to easily build websites.



1. git clonne git@github.com:karpenkoea/gulp-env.git %{new_app_name_here}
2. cd %{new_app_name_here}
3. git remote remove origin
4. Create remote git repository.
5. git remote add origin %{new_app_git_url}
6. npm install
7. Change app name from package.json (optional)
8. Run commands: "scripts": {
    "dev": "gulp",
    "build": "gulp build --build",
    "zip": "gulp deployZIP --build",
    "deploy": "gulp deployFTP --build",
    "svgSprive": "gulp svgSpriteTask"
  } (see package.json)
