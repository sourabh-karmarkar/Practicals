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
      install_requires=['opencv-python==3.4.3.18',
                        'matplotlib==3.0.2',
                        'jupyter==1.0.0'])
