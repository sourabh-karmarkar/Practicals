from setuptools import setup, find_packages

setup(name='numpysyn',
      version='0.1.0',
      description='learn numpy the Synerzip way',
      url='vmandke.wordpress.com',
      license='Proprietary',
      author='Vinaya Mandke',
      author_email='vinaya.mandke@synerzip.com',
      packages=find_packages(),
      include_package_data=True,
      install_requires=['opencv-python==4.2.0.32',
                        'matplotlib==3.0.2',
                        'jupyter==1.0.0',
                        'pandas',
                        'seaborn'])
