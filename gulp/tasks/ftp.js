import { configFTP } from '../config/ftp.js'; // конфигурационный файл config/ftp
import vinylFTP from 'vinyl-ftp';
import util from 'gulp-util';

export const ftp = () => {
	configFTP.log = util.log; // Вывод состояния 
	const ftpConnect = vinylFTP.create(configFTP); // создаем подключение, основываясь на файле конфигурации config/ftp
	return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "FTP",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`)); // путь который указали в paths (ftp)
}