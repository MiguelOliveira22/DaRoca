# -*- coding: utf-8 -*-

################################################################################
## Form generated from reading UI file 'FrmDaRoca.ui'
##
## Created by: Qt User Interface Compiler version 6.7.0
##
## WARNING! All changes made in this file will be lost when recompiling UI file!
################################################################################

from PySide6.QtCore import (QCoreApplication, QDate, QDateTime, QLocale,
    QMetaObject, QObject, QPoint, QRect,
    QSize, QTime, QUrl, Qt)
from PySide6.QtGui import (QAction, QBrush, QColor, QConicalGradient,
    QCursor, QFont, QFontDatabase, QGradient,
    QIcon, QImage, QKeySequence, QLinearGradient,
    QPainter, QPalette, QPixmap, QRadialGradient,
    QTransform)
from PySide6.QtWidgets import (QApplication, QMainWindow, QMenu, QMenuBar,
    QSizePolicy, QStatusBar, QToolBar, QWidget)
import arquives_rc

class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        if not MainWindow.objectName():
            MainWindow.setObjectName(u"MainWindow")
        MainWindow.resize(721, 303)
        self.actionAdd = QAction(MainWindow)
        self.actionAdd.setObjectName(u"actionAdd")
        icon = QIcon()
        icon.addFile(u":/resourcesMain/resources/Add.bmp", QSize(), QIcon.Normal, QIcon.Off)
        self.actionAdd.setIcon(icon)
        self.actionDelete = QAction(MainWindow)
        self.actionDelete.setObjectName(u"actionDelete")
        icon1 = QIcon()
        icon1.addFile(u":/resourcesMain/resources/Minus.bmp", QSize(), QIcon.Normal, QIcon.Off)
        self.actionDelete.setIcon(icon1)
        self.actionEdit = QAction(MainWindow)
        self.actionEdit.setObjectName(u"actionEdit")
        icon2 = QIcon()
        icon2.addFile(u":/resourcesMain/resources/COPY.BMP", QSize(), QIcon.Normal, QIcon.Off)
        self.actionEdit.setIcon(icon2)
        self.actionSave = QAction(MainWindow)
        self.actionSave.setObjectName(u"actionSave")
        icon3 = QIcon()
        icon3.addFile(u":/resourcesMain/resources/Save.bmp", QSize(), QIcon.Normal, QIcon.Off)
        self.actionSave.setIcon(icon3)
        self.actionExit = QAction(MainWindow)
        self.actionExit.setObjectName(u"actionExit")
        icon4 = QIcon()
        icon4.addFile(u":/resourcesMain/resources/CLOSE1.BMP", QSize(), QIcon.Normal, QIcon.Off)
        self.actionExit.setIcon(icon4)
        self.centralwidget = QWidget(MainWindow)
        self.centralwidget.setObjectName(u"centralwidget")
        MainWindow.setCentralWidget(self.centralwidget)
        self.menubar = QMenuBar(MainWindow)
        self.menubar.setObjectName(u"menubar")
        self.menubar.setGeometry(QRect(0, 0, 721, 21))
        self.menuUser = QMenu(self.menubar)
        self.menuUser.setObjectName(u"menuUser")
        self.menuAbout = QMenu(self.menubar)
        self.menuAbout.setObjectName(u"menuAbout")
        MainWindow.setMenuBar(self.menubar)
        self.statusbar = QStatusBar(MainWindow)
        self.statusbar.setObjectName(u"statusbar")
        MainWindow.setStatusBar(self.statusbar)
        self.toolBar = QToolBar(MainWindow)
        self.toolBar.setObjectName(u"toolBar")
        self.toolBar.setMovable(False)
        self.toolBar.setOrientation(Qt.Horizontal)
        self.toolBar.setToolButtonStyle(Qt.ToolButtonIconOnly)
        self.toolBar.setFloatable(False)
        MainWindow.addToolBar(Qt.ToolBarArea.TopToolBarArea, self.toolBar)

        self.menubar.addAction(self.menuUser.menuAction())
        self.menubar.addAction(self.menuAbout.menuAction())
        self.toolBar.addAction(self.actionAdd)
        self.toolBar.addAction(self.actionDelete)
        self.toolBar.addAction(self.actionEdit)
        self.toolBar.addSeparator()
        self.toolBar.addAction(self.actionSave)
        self.toolBar.addSeparator()
        self.toolBar.addAction(self.actionExit)

        self.retranslateUi(MainWindow)

        QMetaObject.connectSlotsByName(MainWindow)
    # setupUi

    def retranslateUi(self, MainWindow):
        MainWindow.setWindowTitle(QCoreApplication.translate("MainWindow", u"MainWindow", None))
        self.actionAdd.setText(QCoreApplication.translate("MainWindow", u"Add", None))
#if QT_CONFIG(tooltip)
        self.actionAdd.setToolTip(QCoreApplication.translate("MainWindow", u"Add Products To Our Database", None))
#endif // QT_CONFIG(tooltip)
        self.actionDelete.setText(QCoreApplication.translate("MainWindow", u"Delete", None))
#if QT_CONFIG(tooltip)
        self.actionDelete.setToolTip(QCoreApplication.translate("MainWindow", u"Delete ProductsFrom Our Database", None))
#endif // QT_CONFIG(tooltip)
        self.actionEdit.setText(QCoreApplication.translate("MainWindow", u"Edit", None))
        self.actionSave.setText(QCoreApplication.translate("MainWindow", u"Save", None))
#if QT_CONFIG(tooltip)
        self.actionSave.setToolTip(QCoreApplication.translate("MainWindow", u"Executes The Comands Inputed, As A Fail-Safe Method", None))
#endif // QT_CONFIG(tooltip)
        self.actionExit.setText(QCoreApplication.translate("MainWindow", u"Exit", None))
#if QT_CONFIG(tooltip)
        self.actionExit.setToolTip(QCoreApplication.translate("MainWindow", u"Exits The Aplication", None))
#endif // QT_CONFIG(tooltip)
        self.menuUser.setTitle(QCoreApplication.translate("MainWindow", u"User", None))
        self.menuAbout.setTitle(QCoreApplication.translate("MainWindow", u"About", None))
        self.toolBar.setWindowTitle(QCoreApplication.translate("MainWindow", u"toolBar", None))
    # retranslateUi

