package cn.fastloader.web.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.fastloader.util.SnowflakeIdWorker;
import cn.fastloader.web.dao.TFileInfoMapper;
import cn.fastloader.web.model.QueryInfo;
import cn.fastloader.web.model.TFileInfo;
import cn.fastloader.web.service.FileInfoService;

/**
 * 文件处理类
 * @author 洋葱骑士
 *
 */
@Service
public class FileInfoServiceImpl implements FileInfoService {

	@Resource
	TFileInfoMapper tFileInfoMapper;
	
    @Override
    public int addFileInfo(TFileInfo fileInfo) {
    	fileInfo.setId(SnowflakeIdWorker.getUUID()+SnowflakeIdWorker.getUUID());
        return tFileInfoMapper.insertSelective(fileInfo);
    }
    
    @Override
    public List<TFileInfo> selectFileByParams(TFileInfo fileInfo) {
        return tFileInfoMapper.selectFileByParams(fileInfo);
    }
    
    @Override
	public List<TFileInfo> selectFileList(QueryInfo  query) {
		return tFileInfoMapper.selectFileList(query);
	}

	@Override
	public int deleteFile(TFileInfo tFileInfo) {
		TFileInfo t = new TFileInfo();
		t.setId(tFileInfo.getId());
		t.setDelFlag("1");
		return tFileInfoMapper.updateByPrimaryKeySelective(t);
	}
}
