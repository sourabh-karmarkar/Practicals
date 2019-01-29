from setuptools import setup, find_packages

setup(name='numpysyn',
      version='0.1.0',
      description='learn nlp the Synerzip way',
      url='vmandke.wordpress.com',
      license='Proprietary',
      author='Sourabh Karmarkar',
      author_email='sourabh.karmarkar@synerzip.com',
      packages=find_packages(),
      include_package_data=True,
      install_requires=['opencv-python==3.4.3.18',
                        'jupyter==1.0.0',
						'pandas',
						'bs4',
						'spacy'])
